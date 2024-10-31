import { ofetch } from "ofetch";
import { projectSchema, projectsSchema } from "../helpers/validate";
import { endpoints } from "../config/urls"
import { ProjectProps } from "../types/types";

export const fetchProjects = async () => {
    try {
        const projects = await ofetch(endpoints.projects, {
            credentials: "include"
        });
        console.log(projectsSchema.safeParse(projects.data));
        return projectsSchema.parse(projects.data);
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const createProject = async (projectData: ProjectProps): Promise<ProjectProps | null> => {
    try {
      const response = await fetch(endpoints.projects, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...projectData,
          // Ensure publishedAt is converted to a proper format
          publishedAt: projectData.publishedAt instanceof Date 
            ? projectData.publishedAt.toISOString() 
            : new Date(projectData.publishedAt).toISOString()
        })
      });
  
      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Server error response:', errorBody);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const createdProject = await response.json();
      return createdProject;
    } catch (error) {
      console.error('Project creation failed', error);
      return null;
    }
  };

export const deleteProject = async (id: string) => {
    try {
        await ofetch(`${endpoints.projects}/${id}`, {
            method: "DELETE",
            credentials: "include"
        });
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};