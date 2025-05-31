import { Context, NotFoundError } from "elysia";
import { JobService } from "../services/JobService";
import { IJob } from "../interfaces/IJob";

type JobContext = Context & {
    jobService: JobService,
    user: string
}

export class JobController {

    private _path: string = "/job";

    get path() {
        return this._path
    }

    get(ctx: JobContext) {
        const { jobService, query, user } = ctx

        return query.id ? jobService.getJob(query.id, user) : jobService.getMyJobs(user)
    }

    create(ctx: JobContext) {
        const { jobService, body, user } = ctx
        const data = body as IJob

        return jobService.createJob(data, user)
    }
    update(ctx: JobContext) {
        const { jobService, body, user, query } = ctx

        const data = body as IJob

        return jobService.updateJob(data, user, query.id)

    }
    delete(ctx: JobContext) {
        const { jobService, user, query } = ctx

        return jobService.deleteJob(user, query.id)

    }

}