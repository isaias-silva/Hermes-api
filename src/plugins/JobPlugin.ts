import Elysia, { t } from "elysia";
import { JobController } from "../controllers/JobController";
import { JobService } from "../services/JobService";
import { CreateJobDto } from "../dtos/CreateJobDto";
import { UpdateJobDto } from "../dtos/UpdateJobDto";

const jobController = new JobController()
export const JobPlugin = new Elysia({ prefix: jobController.path })
    .decorate('jobService', new JobService)

    .onBeforeHandle(({ request, set, store }) => {
        const { headers } = request
        const user = headers.get("user")

        if (!user) {
            set.status = 401
            return { error: "forbidden access" };
        }

        store = { ...store, user }

    })


JobPlugin.get("/", jobController.get, {
    query: t.Object({
        id: t.Optional(t.String({ minLength: 24 }))
    })
})
JobPlugin.post("/", jobController.create, { body: CreateJobDto })

JobPlugin.put("/", jobController.update, {
    body: UpdateJobDto, query: t.Object({
        id: t.String({ minLength: 24 })
    })
})

JobPlugin.delete("/", jobController.delete, {
    query: t.Object({
        id: t.String({ minLength: 24 })
    })
})

