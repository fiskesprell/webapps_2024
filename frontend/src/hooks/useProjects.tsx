import { useEffect, useState } from "react";
import { fetchProjects } from "../services/projectsApi";
import { ProjectProps } from "../types/types";

export function useProjects() {
    const [projectsList, setProjectsList] = useState<ProjectProps[]>([]); // Tom liste til å begynne med
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeData = async () => {
            try{
                const projects = await fetchProjects();
                setProjectsList(projects);
            } catch (e) {
                setError("Kan ikke laste ned prosjekter.")
            } finally {
                setLoading(false);
            }
        }

        initializeData();
    }, [])

  return { projectsList, setProjectsList, loading, error }

}

export default useProjects;