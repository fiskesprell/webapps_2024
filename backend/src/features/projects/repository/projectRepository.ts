import type { DB } from "@/db/db";
import type { Project, DbProject } from "../types/projectsTypes";
import { fromDb, toDb } from "../mappers";
import type { Result } from "@/types";
import { ResultHandler } from "@/lib/result";

export const createProjectRepository = (db: DB) => {

    const exist = async (id: string): Promise<boolean> => {
        const query = db.prepare(
          "SELECT COUNT(*) as count FROM projects WHERE id = ?"
        );
        const data = query.get(id) as { count: number };
        return data.count > 0;
      };
    
    // Henter en vane basert på ID og bruker-ID
    // Denne er kopiert fra ulearn.no i tilfelle, men jeg har ikke bruker-id så.... vet ikke om trengs.
    const getById = async (id: string, userId: string): Promise<Result<Habit | undefined>> => {
        try {
            const project = await exist(id);
            if (!project) return ResultHandler.failure("Project not found", "NOT_FOUND");
            const query = db.prepare(
                "SELECT * FROM projects WHERE id = ? AND user_id = ?"
            );
            const data = query.get(id, userId) as DbHabit;
            // TODO: validering av habit med Zod kan legges til her
            // Konverterer fra databaseformat til applikasjonsformat
            return ResultHandler.success(fromDb(data));
            } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    // Lister alle projects
    const list = async (): Promise<Result<Project[]>> => {
        try {
        const query = db.prepare("SELECT * FROM projects");
        const data = query.all() as DbProject[];
        // Mapper alle projects fra databaseformat til applikasjonsformat
        return ResultHandler.success(data.map((project) => fromDb(project)));
        } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    // Lister alle project for en spesifikk bruker
    // Denne er kopiert fra ulearn.no i tilfelle, men jeg har ikke bruker-id så.... vet ikke om trengs.
    const listByUser = async (userId: string): Promise<Result<Project[]>> => {
        try {
        const query = db.prepare("SELECT * FROM projects WHERE user_id = ?");
        const data = query.all(userId) as DbProject[];
        // Mapper alle project fra databaseformat til applikasjonsformat
        return ResultHandler.success(data.map((project) => fromDb(project)));
        } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    const create = async (data: Project): Promise<Result<string>> => {
        try {
            const project = toDb(data);
    
            const query = db.prepare(`
                INSERT INTO projects (id, title, description, repo_link, published_at, tags, author_id, public)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `);
    
            query.run(
                project.id,
                project.title,
                project.description,
                project.repoLink, // does it need to be repo_link?
                project.publishedAt, // same here
                project.tags,
                project.authorId, //same here
                project.public,
            );
    
            return ResultHandler.success(project.id);
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    
    };

    // Oppdaterer en eksisterende project
    const update = async (data: Project): Promise<Result<Partial<Project>>> => {
        try {
        const projectExist = await exist(data.id);

        if (!projectExist)
            return ResultHandler.failure("Project not found", "NOT_FOUND");
            // Konverterer fra applikasjonsformat til databaseformat
        const project = toDb(data);

        const query = db.prepare(`
            UPDATE projects
            SET title = ?, description = ?, repo_link = ?, published_at = ?, tags = ?, author_id = ?, public = ?
            WHERE id = ?
        `);

        query.run(
            project.title,
            project.description,
            project.repoLink, // Må dette være repo_link?
            project.publishedAt, // samme her
            project.tags, 
            project.authorId, // samme her
            project.public,
            project.id
        );
        // Returnerer den oppdaterte vanen
        return ResultHandler.success(data);
        } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

    // VAR "Sletter en vane basert på ID og bruker-ID"
    // ER NÅ "Sletter en vane basert på ID"
    const remove = async (
        id: string,
    ): Promise<Result<string>> => {
        try {
        const project = await exist(id);
        if (!project) return ResultHandler.failure("Project not found", "NOT_FOUND");
        const query = db.prepare(
            "DELETE FROM projects WHERE id = ?"
        );
        query.run(id);
        // Returnerer ID-en til den slettede vanen
        return ResultHandler.success(id);
        } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR");
        }
    };

  return { create, list, getById, update, listByUser, remove };
};

export type ProjectRepository = ReturnType<typeof createProjectRepository>;