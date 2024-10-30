import { ofetch } from "ofetch";
import { projectsSchema } from "../helpers/validate";
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