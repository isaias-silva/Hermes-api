import { Elysia, TSchema, ValidationError } from 'elysia'



function formatValidationError(error: ValidationError) {
    const [firstError] = error.all;
    const { summary, schema } = firstError as typeof firstError & { schema?: TSchema };

    return {
        message: schema?.error || summary
    };
}

export const ErrorPlugin = new Elysia()
    .onError({ as: 'scoped' }, ({ error, code, path }) => {
        if (code === "VALIDATION") {
            return formatValidationError(error as ValidationError);
        }

        return {
            error,
            path,
            type: code,
            timestamp: new Date().toISOString()
        };
    });