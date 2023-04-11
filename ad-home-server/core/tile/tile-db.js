import path from 'path'
import appConfig from '../../config/app'
import fs from 'fs'

export default new class TileDb {
    getTile() {
        const dbFile = path.join(appConfig.db, 'app.jsondb')
        if (fs.existsSync(dbFile)) {
            const apps = fs.readFileSync(dbFile)
            return JSON.parse(apps.toString())
        } else {
            return []
        }
    }

    writeTile(fullApp) {
        const dbFile = path.join(appConfig.db, 'app.jsondb')
        if (fs.existsSync(dbFile)) {
            fs.writeFileSync(dbFile, JSON.stringify(fullApp))
        }
    }
}