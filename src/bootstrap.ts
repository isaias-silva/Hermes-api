import { Elysia } from "elysia";
import { JobPlugin } from "./plugins/JobPlugin";
import { LoggerPlugin } from "./plugins/LoggerPlugin";
import { ErrorPlugin } from "./plugins/ErrorPlugin";
import { Db } from "./infra/Db";


const port = 8080

const app = new Elysia()
app.use(ErrorPlugin)
app.use(LoggerPlugin)
app.use(JobPlugin)

{
    Db.getInstance().connect()

} { }

app.listen(port, () => console.log(`[global] api running in ${app.server?.hostname}:${app.server?.port}`));
