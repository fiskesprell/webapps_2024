export type Project = {
    id: string;
    title: string;
    description: string;
    repoLink: string;
    publishedAt: Date;
    tags: string[];
    authorId: string;
    public: boolean;
};

export type DbProject = {
    id: string;
    title: string;
    description: string;
    repo_link: string;        
    published_at: string;   // Date -> string
    tags: string;   // Array -> string
    author_id: string;       
    public: boolean;
};