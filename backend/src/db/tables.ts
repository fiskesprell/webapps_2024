import { DB } from "./db";

export const createTables = async (db: DB) => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS authors (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL
    );
  
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      repo_link TEXT,
      published_at TEXT NOT NULL,
      tags TEXT NOT NULL,
      author_id TEXT NOT NULL,
      public BOOLEAN NOT NULL DEFAULT true,
      FOREIGN KEY (author_id) REFERENCES authors(id)
    );
  
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      role TEXT
    );
  `);
  
    db.exec(`
    CREATE INDEX IF NOT EXISTS idx_projects_authorId ON projects(author_id);
    CREATE INDEX IF NOT EXISTS idx_projects_public ON projects(public);
  `);
};