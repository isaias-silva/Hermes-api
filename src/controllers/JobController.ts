import type { Request, Response } from "express";

export class JobController {

    static getJob(req: Request, res: Response) {

        res.status(200).json({
            "message": "job"
        })

    }

}