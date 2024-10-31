import { createProjectRepository, type ProjectRepository } from "../repository/projectRepository";
import type { CreateProject, Project, UpdateProject } from "../schema/projectSchema";
import { validateCreateProject, validateUpdateProject } from "../schema/projectSchema";
import { canEdit } from "../utils/projectValidator";
import { createProject } from "../mappers/projectMapper";
import db from "@/db/db";
// Ikke funnet ut av enda
import { ResultHandler } from "@/lib/result";
import type { Result } from "@/types";


export const createProjectService = (projectRepository: ProjectRepository) => {
    const getById = async (
        id: string,
    ): Promise<Result<Project | undefined>> => {
        return projectRepository.getById(id);
    };

    const list = async (): Promise<Result<Project[]>> => {
        return projectRepository.list();
    };

    const listByUser = async (userId: string): Promise<Result<Project[]>> => {
        return projectRepository.listByUser(userId);
    };

    const create = async (data: CreateProject): Promise<Result<string>> => {
        const validationResult = validateCreateProject(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const project = createProject(validationResult.data);
        return projectRepository.create(project);
    };

    const update = async (data: UpdateProject, userId: string) => {
        const validationResult = validateUpdateProject(data);
        
        if (!validationResult.success) {
            return ResultHandler.failure(validationResult.error.message, "BAD_REQUEST");
        }

        const project = createProject(validationResult.data);

        if (!canEdit(project, userId))
            return ResultHandler.failure("Can not edit this project", "UNAUTHORIZED");

        return projectRepository.update(project);
    };

    const publish = async (id: string) => {
        const result = await projectRepository.getById(id);
        if (!result.success)
            return ResultHandler.failure(result.error.message, result.error.code);
        if (!result.data)
            return ResultHandler.failure("Project not found", "NOT_FOUND");
        const project = result.data;
        return projectRepository.update({ ...project, publishedAt: new Date() });
    };

    const remove = async (id: string) => {
        return projectRepository.remove(id);
    };

    return { list, create, update, getById, listByUser, remove, publish };
};

export const projectService = createProjectService(createProjectRepository(db));
export type ProjectService = ReturnType<typeof createProjectService>;