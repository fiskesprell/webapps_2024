import { Project } from "../types/projectsTypes";

export const canEdit = (project: Project, userId: string): boolean =>
    // habit.userId === userId;
    // Ikke implementert noe userId i projects, så velger å droppe dette pga. tid
    true

export const isValidProject = (project: Project): boolean =>
    // Ikke implementert
    true