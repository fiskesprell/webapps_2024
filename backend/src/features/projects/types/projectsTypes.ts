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