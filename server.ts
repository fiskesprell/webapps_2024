import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";
import { ProjectSchema } from "./types.ts"
import type { Project } from "./types";

const app = new Hono();

// "/*" tillater alle å kommunisere med (????) ikke anbefalt i produksjon
app.use("/*", cors());

// gjør det mulig å serve static filer fra /statics/
app.use("/statics/*", serveStatic({root: "./"}));

// c er en parameter vi får tilbake fra hono
// som gir oss tilgang til masse hjelpemetoder
// som f.eks. json
app.get("/json", async (c) => {
    const data = await readFile("./json/oppgave_3.json", "utf-8");
    return c.json(JSON.parse(data));
})

const port = 3999;

serve({
    fetch: app.fetch,
    port,
});

// Oppgave 10 a

const projects: Project[] = [];

app.post("/add", async (c) => {
    const newProject = await c.req.json();
    // Validerer at dataen vi mottar er en gyldig Habit
    const project = ProjectSchema.parse(newProject);
    // Sjekker om habit er en gyldig Habit, og returnerer en feilmelding hvis ikke
    if (!project) return c.json({ error: "Invalid project" }, { status: 400 });
    console.log(project);
    projects.push(project);
  
    // Returnerer en liste med alle habits. Bruker generisk type for å fortelle at vi returnerer en array av Habit
    return c.json<Project[]>(projects, { status: 201 });
  });
