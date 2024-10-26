// Project-related props

export type ProjectProps = {
    id: ReturnType<typeof crypto.randomUUID>,
    title: string,
    description: string,
    repoLink: string,
};

export type ProjectsProps = {
    listOfProjects: ProjectProps[],
    setProjectsList: React.Dispatch<React.SetStateAction<ProjectProps[]>>
};

export type ProjectFormProps = {
    projectsList: ProjectProps[];
    setProjectsList: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
};

// Experience-related props

export type ExperienceProps = {
    id: string,
    description : string,
};

// User-related props

export type PersonalInfo = {
    name: string,
    contactEmail: string,
    points: string,
    degree: string,
    personalImageLink: string,
}