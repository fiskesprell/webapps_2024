import { Hono } from "hono";
import { projectService, type ProjectService } from "../service/projectService";
import { errorResponse } from "@/lib/error";
import type { HonoEnv } from "@/app";
import type { Data } from "@/types/types";
import type { User } from "@/features/users/types/user";
import db from "@/db/db";
// TODO: Fiks dette?
import { authenticate } from "@/features/users/utils/middleware";


