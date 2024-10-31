import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(3),
  role: z.string().nullable(),
});

export const userResponseSchema = userSchema;

export const updateUserSchema = userSchema;

export const createUserSchema = userSchema.omit({
  id: true,
});

export const userFromDbSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  role: z.string().nullable(),
});

export type User = z.infer<typeof userSchema>;
export type UserFromDb = z.infer<typeof userFromDbSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;

export const validateCreateUser = (data: unknown) => {
  return createUserSchema.safeParse(data);
};

export const validateUpdateUser = (data: unknown) => {
  return updateUserSchema.safeParse(data);
};

export const validateUser = (data: unknown) => {
  return userSchema.safeParse(data);
};