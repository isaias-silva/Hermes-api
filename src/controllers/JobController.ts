import { Context } from "elysia";
import { JobService } from "../services/JobService";

type JobContext = Context & {
    jobService: JobService
}

export class JobController {

    private _path: string = "/job";

    get path() {
        return this._path
    }

    get(ctx: JobContext) {
        const { jobService, query } = ctx

        return {}
    }
    
    create(ctx: JobContext) {
        return {}
    }
    update(ctx: JobContext) {
        
        return {}
    }
    delete(ctx: JobContext) {
        return {}
    }

}