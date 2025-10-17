import { Router } from "express";
import z, { uuid } from "zod";

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

const searchQueryParamsSchema = z.object({
    term: z.string().min(2)
})

router.get('/:something', validateParams(getInterviewSchema), getInterview)

router.post('/', validateBody(postInterviewSchema), postInterview);

export default router;