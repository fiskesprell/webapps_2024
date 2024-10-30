import { Hono } from "hono";
import { cors } from "hono/cors";
import { getUser } from "./features/users/utils/auth"
import { HTTPException } from "hono/http-exception";
import { User } from "./features/users/types/user";

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


  return c.json({
    data: [
        {
          id: crypto.randomUUID(),
          title: "Personal Website",
          description: "Personal website made for website week 2020",
          repoLink: "http://www.duckduckgo.com",
          publishedAt: new Date("2024-10-01"),
          tags: ["Webdev", "HTML", "CSS", "React", "TypeScript"],
        },
        {
          id: crypto.randomUUID(),
          title: "SuperGame",
          description: "Game made for coolmathgames gamejam '24",
          repoLink: "http://www.duckduckgo.com",
          publishedAt: new Date("2024-10-02"),
          tags: ["Gamedev", "Godot", "C#"],
        },
        {
          id: crypto.randomUUID(),
          title: "Secret Project",
          description: `Signed an NDA. Can't say. Sorry. But its amazing, huge even. Here is even more filler-text, just for you. 
          Yeah, you. You reading this filler text. You must really enjoy it, seeing as you've read this far. 
          You read for the love of the filler. I respect that.
          I recommend watching One Piece; seeing as you really, really seem to love filler.`,
          repoLink: "http://www.duckduckgo.com",
          publishedAt: new Date("2024-10-03"),
          tags: ["NDA"],
        },
      ],
  });
});

export default app;