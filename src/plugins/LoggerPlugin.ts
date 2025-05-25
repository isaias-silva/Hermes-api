import { Elysia } from 'elysia'

type LoggerStore = {
    start: number
}

export const LoggerPlugin = new Elysia()
    .decorate('store', {} as LoggerStore)
    .onRequest(({ request, store }) => {
        store.start = Date.now()
        console.log(`[${request.method}] ${request.url}`)
    })

    .onAfterResponse({ as: 'scoped' }, ({ request, store, set }) => {
       
        const duration = Date.now() - store.start
        console.log(`[${request.method}] ${request.url} [${set.status}] `, `${duration}ms`)
    })