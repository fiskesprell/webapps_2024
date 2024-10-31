import { Hono } from "hono";
import { projectService, type ProjectService } from "../service/projectService";
import { errorResponse } from "@/lib/error";

import type { HonoEnv } from "@/app";
import type { Data } from "@/types/types";

// har ikke User i eget prosjekt,
// import type { User } from "@/features/users/types";
// Hoppet over å lage middleware da dette ikke var obligatorisk i følge notion
// import { authenticate } from "@/features/users/utils/middleware";

// Bruker factory med DI av habitService
export const createProjectController = (projectService: ProjectService) => {
  const app = new Hono<HonoEnv>();

	// Legger til mellomvaren vi laget tidligere
	// Sikrer at routes krever en bruker
    // app.use(authenticate());

	// Henter ut bruker
	// Håndterer eventuelle query som blir sendt med
		// For filtrering, paginering og sortering
  app.get("/", async (c) => {
    // const user = c.get("user") as User;
    const query = c.req.query();
    // Henter ut vaner basert på hvem brukeren er
    const result = await projectService.list();

    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    // Returnerer json med {success: true, data: []}
    return c.json(result);
  });

	// Henter ut en enkelt vane med :id som dynamisk param
	// Eks: localhost:3999/api/v1/habits/123-456-789
  app.get("/:id", async (c) => {
	  // Henter ut id parameteren fra urlen
    const id = c.req.param("id");
    const result = await projectService.getById(id);
    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    return c.json(result);
  });


	// Bruker post for å håndtere POST request brukt for lagring av vane
  app.post("/", async (c) => {
    const data = await c.req.json();
    const result = await projectService.create({
      ...data,
    });
    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    return c.json<Data<string>>(result, { status: 201 });
  });

	// Bruker patch for å håndtere PATCH request ved publisering av en vane
  app.patch("/:id/publish", async (c) => {
    const id = c.req.param("id");
    const result = await projectService.publish(id);
    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    return c.json(result);
  });

	// Bruker også patch for å oppdatere en vane
  app.patch("/:id", async (c) => {
    const id = c.req.param("id");
    const data = await c.req.json();
    const result = await projectService.update(
      {
        id,
        ...data,
      },
    );
    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    return c.json(result);
  });

	// Bruker delete for å håndtere DELETE request av en vane
  app.delete("/:id", async (c) => {
    const id = c.req.param("id");
    const result = await projectService.remove(id);
    if (!result.success)
      return errorResponse(c, result.error.code, result.error.message);
    return c.json(result);
  });

	// Returnerer app for å kunne bruke den i app.ts
  return app;
};

// Lager en instanse for å unngå at denne må opprettes alle steder
export const projectController = createProjectController(projectService);