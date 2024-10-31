import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(3),
  description: z.string(),
  repoLink: z.string().url(),
  publishedAt: z.date(),
  tags: z.array(z.string()),
  authorId: z.string(),
  public: z.boolean(),
});

export const projectResponseSchema = projectSchema;

export const updateProjectSchema = projectSchema.omit({
  publishedAt: true,
});

export const createProjectSchema = projectSchema.omit({
  id: true,
  publishedAt: true,
});

export const projectFromDbSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  repo_link: z.string(),
  published_at: z.string(),
  tags: z.string(),
  author_id: z.string(),
  public: z.boolean(),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectFromDb = z.infer<typeof projectFromDbSchema>;
export type CreateProject = z.infer<typeof createProjectSchema>;
export type UpdateProject = z.infer<typeof updateProjectSchema>;
export type ProjectResponse = z.infer<typeof projectResponseSchema>;

export const validateCreateProject = (data: unknown) => {
  return createProjectSchema.safeParse(data);
};

export const validateUpdateProject = (data: unknown) => {
  return updateProjectSchema.safeParse(data);
};

export const validateProject = (data: unknown) => {
  return projectSchema.safeParse(data);
};