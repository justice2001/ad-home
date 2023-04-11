import { genUUID } from "../utils/uuid"
import tileDb from "./tile-db"

export default new class TileOperation {
    /**
     * Get All App Tile
     * @param {Array} public Public Tile(Need Auth?)
     */
    getAllTile(getPublic = false) {
        return tileDb.getTile()
    }

    /**
     * Push App
     */
    addTile(name, widget, meta={}) {
        const id = genUUID()
        const info = {id,name, widget, meta}
        const appList = tileDb.getTile()
        appList.push(info)
        tileDb.writeTile(appList)
    }
}