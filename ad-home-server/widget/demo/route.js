import KoaRouter from '@koa/router'

const router = new KoaRouter()

router.get("/api/widget/widget-demo/", async (ctx) => {
    ctx.body = "Hello Widget"
})

export default router