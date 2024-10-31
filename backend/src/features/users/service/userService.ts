import { createUserRepository, UserRepository } from "../repository/userRepository";
import type { CreateUser, User, UpdateUser } from "../schema/userSchema";
import { validateCreateUser, validateUpdateUser } from "../schema/userSchema";
import { createUser } from "../mappers/userMapper";
import db from "@/db/db";
import type { Result } from "@/types/types";
import { ResultHandler } from "@/lib/result";

export const createUserService = (userRepository: UserRepository) => {
    const getById = async (id: string): Promise<Result<User | undefined>> => {
        return userRepository.getById(id);
    };

    const list = async (): Promise<Result<User[]>> => {
        return userRepository.list();
    };

    const create = async (data: CreateUser): Promise<Result<string>> => {
        const validationResult = validateCreateUser(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const user = createUser(validationResult.data);
        return userRepository.create(user);
    };

    const update = async (data: UpdateUser) => {
        const validationResult = validateUpdateUser(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const user = createUser(validationResult.data);
        const existingUser = await getById(user.id);
        
        if (!existingUser.success || !existingUser.data) {
            return ResultHandler.failure("User not found", "NOT_FOUND");
        }

        return userRepository.update(user);
    };

    const remove = async (id: string) => {
        return userRepository.remove(id);
    };

    return { list, create, update, getById, remove };
};

export const userService = createUserService(createUserRepository(db));
export type UserService = ReturnType<typeof createUserService>;