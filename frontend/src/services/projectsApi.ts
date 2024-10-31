import { ofetch } from "ofetch";
import { projectSchema, projectsSchema } from "../helpers/validate";
import { endpoints } from "../config/urls"

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

export const createProject = async (data: any) => {
    try {
        const newProject = await ofetch(endpoints.projects, {
            method: "POST",
            credentials: "include",
            body: data
        });
        console.log(projectSchema.safeParse(newProject.data));
        return projectSchema.parse(newProject.data);
    } catch (e) {
        console.error(e);
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