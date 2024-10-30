import { users } from "../../../data/userData";
import type { User } from "../types/user";

// Eksempel på en cookie vi mottar
// "user.id=johndoe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/; domain=example.com; secure; HttpOnly"

// Transformerer cookien til noe vi kan jobbe med
const parseCookie = (cookie: string) => {
  return Object.fromEntries(
    cookie.split(";").map((cookie) => cookie.trim().split("="))
  );
};

export function getUser(request: Request): User | null {
  const cookies = parseCookie(request.headers.get("Cookie") ?? "");
  // Henter ut user.id cookie verdi
  const role = cookies["user.role"];
  return users.find((user) => user.role === role) ?? null;
}