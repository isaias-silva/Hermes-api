import { NotFoundError } from "elysia";
import { IJobReq } from "../interfaces/IJobReq";
import { JobRepository } from "../repositories/JobRepository";

export class JobService {
    private jobRepository: JobRepository;

    constructor(jobRepository?: JobRepository) {
        this.jobRepository = jobRepository || new JobRepository
    }


    async getJob(_id: string, user: string) {
        return await this.jobRepository.get(user, _id)
    }
    async getMyJobs(user: string) {
        return await this.jobRepository.getMyJobs(user)
    }

    async createJob(data: IJobReq, user: string) {
        const id = await this.jobRepository.create(user, data)
      
        return { message: "created", id }
    }

    async updateJob(data: IJobReq, _id: string, user: string) {
     
        const result = await this.jobRepository.update(user, _id, data)
        if (result < 1) {
            throw new NotFoundError("Job not found")
        }
        return { message: "updated" }
    }

    async deleteJob(_id: string, user: string) {
        const result = await this.jobRepository.delete(user, _id)
        if (result < 1) {
            throw new NotFoundError("Job not found")
        }
        return { message: "deleted" }

    }
}