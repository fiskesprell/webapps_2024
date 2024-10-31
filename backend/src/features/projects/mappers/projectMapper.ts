import { DbProject, Project } from "../types/projectsTypes";

export const fromDbProject = (project: DbProject) => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      repoLink: project.repo_link,
      publishedAt: new Date(project.published_at),
      tags: project.tags ? project.tags.split(",") : [],
      authorId: project.author_id,
      public: project.public,
    };
};

export const createProject = (project: Partial<Project>): Project => {
    return {
      id: project.id ?? crypto.randomUUID(),
      title: project.title ?? "",
      description: project.description ?? "",
      repoLink: project.repoLink ?? "",
      publishedAt: project.publishedAt ?? new Date(Date.now()),
      tags: project.tags ?? [],
      authorId: project.authorId ?? "",
      public: project.public ?? false,
    };
};