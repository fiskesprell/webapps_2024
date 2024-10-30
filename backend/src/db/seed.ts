import { authors } from "../data/authorData";
import { projects } from "../data/projectData";
import { users } from "../data/userData";
import { DB } from "./db";

export const seed = async (db: DB) => {
  const insertAuthor = db.prepare(`
    INSERT INTO authors (id, email, name) 
    VALUES (?, ?, ?)
  `);

  const insertProject = db.prepare(`
    INSERT INTO projects (id, title, description, repo_link, published_at, tags, author_id, public) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertUser = db.prepare(`
    INSERT INTO users (id, email, name, role) 
    VALUES (?, ?, ?, ?)
  `);

  db.transaction(() => {
    for (const author of authors) {
      insertAuthor.run(
        author.id,
        author.email,
        author.name
      );
    }

    for (const project of projects) {
      insertProject.run(
        project.id,
        project.title,
        project.description,
        project.repoLink,
        project.publishedAt.toISOString(),
        JSON.stringify(project.tags),
        project.authorId,
        project.public ? 1 : 0
      );
    }

    for (const user of users) {
      insertUser.run(
        user.id,
        user.email,
        user.name,
        user.role
      );
    }
  })();
};