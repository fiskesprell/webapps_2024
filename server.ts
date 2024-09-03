import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

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

