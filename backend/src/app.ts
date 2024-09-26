// ./src/app.ts

import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/projects", (c) => {
  return c.json({
    data: [
        {
          id: crypto.randomUUID(),
          title: "Personal Website",
          description: "Personal website made for website week 2020",
          repoLink: "http://www.duckduckgo.com",
        },
        {
          id: crypto.randomUUID(),
          title: "SuperGame",
          description: "Game made for coolmathgames gamejam '24",
          repoLink: "http://www.duckduckgo.com",
        },
        {
          id: crypto.randomUUID(),
          title: "Secret Project",
          description: `Signed an NDA. Can't say. Sorry. But its amazing, huge even. Here is even more filler-text, just for you. 
          Yeah, you. You reading this filler text. You must really enjoy it, seeing as you've read this far. 
          You read for the love of the filler. I respect that.
          I recommend watching One Piece; seeing as you really, really seem to love filler.`,
          repoLink: "http://www.duckduckgo.com",
        },
      ],
  });
});

export default app;