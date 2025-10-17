import type { Request, Response } from "express"

export const getInterview = (req: Request, res: Response) => {
    const response = {
        message: `Here is your interview #${req.query.something}`
    }
    res.sendStatus(200).json(response)
}

export const postInterview = (req: Request, res: Response) => {
    const response = {
        message: `Thank your posting that: ${req.body.other}`
    }
    res.sendStatus(200).json(response)
}