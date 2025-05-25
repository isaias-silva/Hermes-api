import { t } from "elysia";

export const CreateJobDto = t.Object({
    name: t.String({ minLength: 3, maxLength: 20 }),
    _date_exec: t.String({ format: "date-time" }),
    message: t.String()
})
