import { z } from "zod";

export const authorSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(3),
});

export const authorResponseSchema = authorSchema;

export const updateAuthorSchema = authorSchema;

export const createAuthorSchema = authorSchema.omit({
  id: true,
});

export const authorFromDbSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
});

export type Author = z.infer<typeof authorSchema>;
export type AuthorFromDb = z.infer<typeof authorFromDbSchema>;
export type CreateAuthor = z.infer<typeof createAuthorSchema>;
export type UpdateAuthor = z.infer<typeof updateAuthorSchema>;
export type AuthorResponse = z.infer<typeof authorResponseSchema>;

export const validateCreateAuthor = (data: unknown) => {
  return createAuthorSchema.safeParse(data);
};

export const validateUpdateAuthor = (data: unknown) => {
  return updateAuthorSchema.safeParse(data);
};

export const validateAuthor = (data: unknown) => {
  return authorSchema.safeParse(data);
};