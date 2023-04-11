const KoaRouter = require("@koa/router");
import TileController from '../controller/TileController.js'

const router = new KoaRouter();

router.get('/api', async (ctx, next) => {
    ctx.body = "<h1>Hello </h1>"
})

router.get('/api/tile/all', TileController.allTile)
router.get('/api/tile/push', TileController.addTile)

export default router