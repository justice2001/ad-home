import tileOperation from '../tile/tile-op'

class TileController {
    async allTile(ctx, next) {
        ctx.body = tileOperation.getAllTile()
    }

    async addTile(ctx, next) {
        tileOperation.addTile("TEST", "widget-app", {icon: 'demo', name: 'demo'})
        ctx.body = {"code": 200}
    }
}

export default new TileController()