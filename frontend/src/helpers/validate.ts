import { z } from "zod";

export { projectSchema, projectsSchema };

const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    repoLink: z.string(),
    publishedAt: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
});

const projectsSchema = z.array(projectSchema);