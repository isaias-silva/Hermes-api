import { t } from "elysia";

export const UpdateJobDto = t.Object({
    _id: t.String({ minLength: 24 }),
    name: t.Optional(t.String({ minLength: 3, maxLength: 20 })),
    _date_exec: t.Optional(t.String({ format: "date-time" })),
    message: t.Optional(t.String()),

})
