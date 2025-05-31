import mongoose, { Mongoose } from "mongoose";
import { TimerUtils } from "../utils/TimerUtils";

export class Db {

    private count: number = 1

    private static instance: Db;

    constructor() { }

    async connect() {

        try {
            const url = process.env.MONGO_URI || 'mongodb://hermes:abc123@localhost:27017/admin'
           
            await mongoose.connect(url)
            
            console.log("MongoDb connected")

        } catch (err) {
            if (this.count >= 4) {
                console.error(`❌ MongoDB connection error`, err)
                process.exit()

            }
            console.warn(`❌ MongoDB connection error: retry(${this.count})`)
            this.count += 1
            await TimerUtils.delay(5)

            this.connect()


        }
    }

    static getInstance(): Db {
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }
}