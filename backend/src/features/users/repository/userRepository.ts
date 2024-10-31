import type { DB } from "@/db/db";
import type { User } from "../types/user";
import { Result } from "@/types";
import { ResultHandler } from "@/lib/result";

export const createUserRepository = (db: DB) => {
    const exist = async (id: string): Promise<boolean> => {
        const query = db.prepare(
            "SELECT COUNT(*) as count FROM users WHERE id = ?"
        );
        const data = query.get(id) as { count: number };
        return data.count > 0;
    };

    const getById = async (id: string): Promise<Result<User | undefined>> => {
        try {
            const user = await exist(id);
            if (!user) return ResultHandler.failure("User not found", "NOT_FOUND");
            const query = db.prepare("SELECT * FROM users WHERE id = ?");
            const data = query.get(id) as User;
            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const list = async (): Promise<Result<User[]>> => {
        try {
            const query = db.prepare("SELECT * FROM users");
            const data = query.all() as User[];
            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const create = async (data: User): Promise<Result<string>> => {
        try {
            const query = db.prepare(`
                INSERT INTO users (id, email, name, role)
                VALUES (?, ?, ?, ?)
            `);

            query.run(
                data.id,
                data.email,
                data.name,
                data.role
            );

            return ResultHandler.success(data.id);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const update = async (data: User): Promise<Result<User>> => {
        try {
            const userExist = await exist(data.id);
            if (!userExist) return ResultHandler.failure("User not found", "NOT_FOUND");

            const query = db.prepare(`
                UPDATE users
                SET email = ?, name = ?, role = ?
                WHERE id = ?
            `);

            query.run(
                data.email,
                data.name,
                data.role,
                data.id
            );

            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const remove = async (id: string): Promise<Result<string>> => {
        try {
            const user = await exist(id);
            if (!user) return ResultHandler.failure("User not found", "NOT_FOUND");
            
            const query = db.prepare("DELETE FROM users WHERE id = ?");
            query.run(id);
            
            return ResultHandler.success(id);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    return { create, list, getById, update, remove };
};

export type UserRepository = ReturnType<typeof createUserRepository>;