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
  
export type User = {
    id: string;
    email: string;
    name: string;
    role: string | null;
};