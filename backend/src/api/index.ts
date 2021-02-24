import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import router from "./routes.ts"

const port = 8000
const app = new Application()


// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt} - ${ctx.response.status}`);
});

// Timing
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes())

console.log(`App started on port ${port}`)
await app.listen({ port });