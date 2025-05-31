import { Context, NotFoundError } from "elysia";
import { JobService } from "../services/JobService";
import { IJobReq } from "../interfaces/IJobReq";

type JobContext = Context & {
    jobService: JobService,
    store: { user: string }
}

export class JobController {

    private _path: string = "/job";

    get path() {
        return this._path
    }

    get(ctx: JobContext) {
        const { jobService, query, store } = ctx

        return query.id ? jobService.getJob(query.id, store.user) : jobService.getMyJobs(store.user)
    }

    create(ctx: JobContext) {
        const { jobService, body, store } = ctx
        const data = body as IJobReq

        return jobService.createJob(data, store.user)
    }
    update(ctx: JobContext) {
        const { jobService, body, store, query } = ctx

        const data = body as IJobReq

        return jobService.updateJob(data, query.id, store.user)

    }
    delete(ctx: JobContext) {
        const { jobService, store, query } = ctx

        return jobService.deleteJob(query.id, store.user)

    }

}