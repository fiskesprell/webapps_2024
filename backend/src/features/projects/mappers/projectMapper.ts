import { Entries } from "@/lib/generalTypes";
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

export const toDb = (data: Project): DbProject => {
  const entries = Object.entries(data) as Entries<Project>;
  const dbProject = {} as DbProject;

  for (const entry of entries) {
      if (!entry) continue;
      const [key, value] = entry;
      switch (key) {
          case "id":
              dbProject.id = value;
              break;
          case "title":
              dbProject.title = value;
              break;
          case "description":
              dbProject.description = value;
              break;
          case "repoLink":
              dbProject.repo_link = value;
              break;
          case "publishedAt":
              dbProject.published_at = value?.toISOString();
              break;
          case "tags":
              dbProject.tags = value.join(",");
              break;
          case "authorId":
              dbProject.author_id = value;
              break;
          case "public":
              dbProject.public = value;
              break;
          default:
              break;
      }
  }
  return dbProject;
};