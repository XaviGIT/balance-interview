import { Router } from "express";
import z from "zod";

import { getInterview, postInterview } from "../controllers/interview.controller.ts";
import { validateParams, validateBody } from "../middleware/validation.ts";

const router = Router();

const getInterviewSchema = z.object({
    something: z.string()
})

const postInterviewSchema = z.object({
    id: z.string(),
    other: z.number()
})

router.get('/', validateParams(getInterviewSchema), getInterview)

router.post('/test', validateBody(postInterviewSchema), postInterview);

export default router;