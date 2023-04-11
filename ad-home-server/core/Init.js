import InitWidget from './widget/InitWidget'
import fs from 'fs'
import appConfig from '../config/app'
import path from 'path'

export function init(app) {
    // Init apps list
    const appDbFile = path.join(appConfig.db, "app.jsondb")
    if (!fs.existsSync(appDbFile)) {
        console.log("Initializing DB app.jsondb ...");
        fs.writeFileSync(appDbFile, '[]')
    }
    InitWidget(app)
}