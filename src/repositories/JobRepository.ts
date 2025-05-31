import { IJobReq } from "../interfaces/IJobReq";
import { JobModel } from "../models/JobModel";

export class JobRepository {

    async get(user: string, _id: string) {

        return JobModel.findOne({ _id, user })

    }
    async getMyJobs(user:string){

        return JobModel.find({ user })

    }
    async create(user: string, jobData: IJobReq) {

        const data = { user, ...jobData }

        const job = await JobModel.create(data)

        job.save()

        return job._id.toString()
    }

    async update(user: string, _id: string, jobData: IJobReq) {

        const result = await JobModel.updateOne({ user, _id }, jobData)
        
        return result.modifiedCount
    }

    async delete(user: string, _id: string) {

        const result = await JobModel.deleteOne({ user, _id })
    
        return result.deletedCount
    }
}