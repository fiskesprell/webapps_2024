import { z } from "zod";

export { projectSchema, projectsSchema };

export const authorSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
});

const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    repoLink: z.string(),
    publishedAt: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    authorId: z.string(),
    author: authorSchema.optional(),
    public: z.boolean(),
});

const projectsSchema = z.array(projectSchema);