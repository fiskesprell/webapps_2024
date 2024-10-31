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
    tags: z.array(z.string()).transform((tags) =>
        // Fjerner spesialtegn fra tags. Burde egentlig fikse i backend men gjorde dette som rask løsning.
        tags.map(tag => tag.replace(/^[\[\("']+|[\]\)"']+$/g, ""))
    ),
    authorId: z.string(),
    // author: authorSchema.optional(),
    public: z.union([z.boolean(), z.number()]).transform((value) => {
        return typeof value === 'number' ? value === 1 : value;
    }),
});


const projectsSchema = z.array(projectSchema);