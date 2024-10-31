import type { DB } from "@/db/db";
import type { Author } from "../types/author";
import { Result } from "@/types";
import { ResultHandler } from "@/lib/result";

export const createAuthorRepository = (db: DB) => {
    const exist = async (id: string): Promise<boolean> => {
        const query = db.prepare(
            "SELECT COUNT(*) as count FROM authors WHERE id = ?"
        );
        const data = query.get(id) as { count: number };
        return data.count > 0;
    };

    const getById = async (id: string): Promise<Result<Author | undefined>> => {
        try {
            const author = await exist(id);
            if (!author) return ResultHandler.failure("Author not found", "NOT_FOUND");
            const query = db.prepare("SELECT * FROM authors WHERE id = ?");
            const data = query.get(id) as Author;
            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const list = async (): Promise<Result<Author[]>> => {
        try {
            const query = db.prepare("SELECT * FROM authors");
            const data = query.all() as Author[];
            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const create = async (data: Author): Promise<Result<string>> => {
        try {
            const query = db.prepare(`
                INSERT INTO authors (id, email, name)
                VALUES (?, ?, ?)
            `);

            query.run(
                data.id,
                data.email,
                data.name
            );

            return ResultHandler.success(data.id);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const update = async (data: Author): Promise<Result<Author>> => {
        try {
            const authorExist = await exist(data.id);
            if (!authorExist) return ResultHandler.failure("Author not found", "NOT_FOUND");

            const query = db.prepare(`
                UPDATE authors
                SET email = ?, name = ?
                WHERE id = ?
            `);

            query.run(
                data.email,
                data.name,
                data.id
            );

            return ResultHandler.success(data);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const remove = async (id: string): Promise<Result<string>> => {
        try {
            const author = await exist(id);
            if (!author) return ResultHandler.failure("Author not found", "NOT_FOUND");
            
            const query = db.prepare("DELETE FROM authors WHERE id = ?");
            query.run(id);
            
            return ResultHandler.success(id);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    return { create, list, getById, update, remove };
};

export type AuthorRepository = ReturnType<typeof createAuthorRepository>;
