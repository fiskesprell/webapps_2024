import { z } from "zod";

// Oppgave 10a

export const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    repositoryLink: z.string(),
    imageLink: z.string(),
});

// Definerer et Zod-skjema for en array av Habit
export const ProjectArraySchema = z.array(ProjectSchema);

// Oppdatert type-definisjon basert på Zod-skjemaet
export type Project = z.infer<typeof ProjectSchema>;

// Oppdatert type-definisjon basert på Zod-skjemaet
export type CreateHabit = z.infer<typeof ProjectSchema>;