import { Author, DbAuthor } from "../types/author";

export const fromDbAuthor = (author: DbAuthor) => {
    return {
        id: author.id,
        email: author.email,
        name: author.name,
    };
};

export const createAuthor = (author: Partial<Author>): Author => {
    return {
        id: author.id ?? crypto.randomUUID(),
        email: author.email ?? "",
        name: author.name ?? "",
    };
};