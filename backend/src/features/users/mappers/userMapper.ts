import { Entries } from "@/lib/generalTypes";
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


export const userToDb = (data: User): DbUser => {
  const entries = Object.entries(data) as Entries<User>;
  const dbUser = {} as DbUser;

  for (const entry of entries) {
      if (!entry) continue;
      const [key, value] = entry;
      switch (key) {
          case "id":
              dbUser.id = value;
              break;
          case "email":
              dbUser.email = value;
              break;
          case "name":
              dbUser.name = value;
              break;
          case "role":
              dbUser.role = value;
              break;
          default:
              break;
      }
  }
  return dbUser;
};