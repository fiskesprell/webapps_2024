import { ofetch } from "ofetch";

export const fetchProjects = async () => {
    const response = await ofetch("http://localhost:3000/projects");
    return response.data;
}