import { Hono } from "hono";
import { cors } from "hono/cors";
import { getUser } from "./features/users/utils/auth"
import { HTTPException } from "hono/http-exception";
import { User } from "./features/users/types/user";
import { projects } from "./data/projectData";

type ContextVariables = {
  user: User | null;
};

const app = new Hono<{ Variables: ContextVariables }>();

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/projects", (c) => {
  const user = getUser(c.req.raw);
  
  // Legg til en cookie manuelt i browser med følgende data:
  // Name = user.id
  // value = 1
  // if (!user) throw new HTTPException(401);


  return c.json({data: projects});
});

export default app;