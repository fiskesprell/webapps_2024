import { createAuthor } from "../mappers/authorMapper";
import { AuthorRepository, createAuthorRepository } from "../repository/authorRepository";
import type { Author, CreateAuthor, UpdateAuthor } from "../schema/authorSchema";
import { validateCreateAuthor, validateUpdateAuthor } from "../schema/authorSchema";
import db from "@/db/db";
// Ikke funnet ut av enda
import { Result } from "@/types";
import { ResultHandler } from "@/lib/result";


export const createAuthorService = (authorRepository: AuthorRepository) => {
    const getById = async (id: string): Promise<Result<Author | undefined>> => {
        return authorRepository.getById(id);
    };

    const list = async (): Promise<Result<Author[]>> => {
        return authorRepository.list();
    };

    const create = async (data: CreateAuthor): Promise<Result<string>> => {
        const validationResult = validateCreateAuthor(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const author = createAuthor(validationResult.data);
        return authorRepository.create(author);
    };

    const update = async (data: UpdateAuthor) => {
        const validationResult = validateUpdateAuthor(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const author = createAuthor(validationResult.data);
        const existingAuthor = await getById(author.id);
        
        if (!existingAuthor.success || !existingAuthor.data) {
            return ResultHandler.failure("Author not found", "NOT_FOUND");
        }

        return authorRepository.update(author);
    };

    const remove = async (id: string) => {
        return authorRepository.remove(id);
    };

    return { list, create, update, getById, remove };
};

export const authorService = createAuthorService(createAuthorRepository(db));
export type AuthorService = ReturnType<typeof createAuthorService>;