import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    _date_exec: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    concluded: {
        type: Boolean,
        default: false
    },
    error: {
        type: Boolean,
        default: false
    },
    cause: {
        type: String
    }


});

export const JobModel = mongoose.model("Job", jobSchema);