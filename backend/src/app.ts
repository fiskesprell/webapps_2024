import { Hono } from "hono";
import { cors } from "hono/cors";
import { getUser } from "./features/users/utils/auth"
import { HTTPException } from "hono/http-exception";
import { User } from "./features/users/types/user";
import { projects } from "./data/projectData";
import { authors } from "./data/authorData";
import { handleError } from "@/lib/error"
import { ServerEnv } from "./lib/env";
import { DB } from "./db/db";
import { Logger } from "pino";
import { projectController } from "@/features/projects/controller/projectsController";

// Types

type ContextVariables = {
  user: User | null;
};

export type ServiceContext = {
  db: DB;
  logger: Logger;
};

export type HonoEnv = {
  Bindings: ServerEnv;
  Variables: {
    services: ServiceContext;
  } & ContextVariables;
};


// App(hono)
const app = new Hono<HonoEnv>();
app.route("/v1/projects", projectController);

app.onError(handleError);

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/authors", (c) => {
    return c.json(authors)
});

app.get("/projects", (c) => {
  const user = getUser(c.req.raw);

  const projectsWithAuthors = projects.map(project => {
    const author = authors.find(author => author.id === project.authorId);
    return {
      ...project,
      author: author || null
    };
  });

  if (user && user.role === "admin") {
    return c.json({ data: projectsWithAuthors });
  }

  // Om ikke admin så filtrer bort alle public=false prosjekter
  const publicProjects = projectsWithAuthors.filter(project => project.public === true);

  return c.json({ data: publicProjects });
});

export default app;