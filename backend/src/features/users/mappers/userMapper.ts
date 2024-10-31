import { DbUser, User } from "../types/user";

export const fromDbUser = (user: DbUser) => {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
};

export const createUser = (user: Partial<User>): User => {
    return {
      id: user.id ?? crypto.randomUUID(),
      email: user.email ?? "",
      name: user.name ?? "",
      role: user.role ?? null,
    };
  };