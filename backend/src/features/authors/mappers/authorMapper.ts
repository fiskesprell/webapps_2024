import { Entries } from "@/lib/generalTypes";
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

export const toDb = (data: Author): DbAuthor => {
    const entries = Object.entries(data) as Entries<Author>;
    const dbAuthor = {} as DbAuthor;

    for (const entry of entries) {
        if (!entry) continue;
        const [key, value] = entry;
        switch (key) {
            case "id":
                dbAuthor.id = value;
                break;
            case "email":
                dbAuthor.email = value;
                break;
            case "name":
                dbAuthor.name = value;
                break;
            default:
                break;
        }
    }
    return dbAuthor;
};