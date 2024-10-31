// Project-related props

export type ProjectProps = {
    id: ReturnType<typeof crypto.randomUUID>,
    title: string,
    description: string,
    repoLink: string,
    publishedAt: Date,
    tags: string[],
    authorId: string,
    // author: Author,
};

export type Author = {
    id: string;
    email: string;
    name: string;
};


export type ProjectsProps = {
    listOfProjects: ProjectProps[],
    setProjectsList: React.Dispatch<React.SetStateAction<ProjectProps[]>>,
    deleteProject: (id: string) => Promise<boolean>,
};

export type ProjectFormProps = {
    projectsList: ProjectProps[],
    setProjectsList: React.Dispatch<React.SetStateAction<ProjectProps[]>>,
    createProject: (projectData: ProjectProps) => Promise<void>
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