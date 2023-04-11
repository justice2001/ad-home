import { log } from "console";
import appConfig from "../../config/app";
import fs from 'fs'
import path from "path";

export default async function init(app) {
    const WIDGET_DIR = appConfig.widgetDir
    log("Initializing Widget from " + WIDGET_DIR)
    const list = fs.readdirSync(WIDGET_DIR)
    const widgetList = []
    // Check Is Plugin
    list.map(widget => {
        const widgetDir = path.join(WIDGET_DIR, widget)
        // Check Info File
        if (fs.existsSync(path.join(widgetDir, 'info.json'))) {
            // Read Info
            const widgetInfoRaw = fs.readFileSync(path.join(widgetDir, 'info.json'))
            const widgetInfo = JSON.parse(widgetInfoRaw.toString())
            widgetList.push(widgetInfo)
            log(`Loading Widget: ${widgetInfo.id}(${widgetInfo.name}):v${widgetInfo.version}`)
            // Load Route
            const routeFile = path.join(widgetDir, "route.js")
            if (fs.existsSync(routeFile)) {
                const route = require(routeFile)
                app.use(route.default.routes())
            }
        }
    })
    // Write to db
    fs.writeFileSync(appConfig.db + "/widgets.jsondb", JSON.stringify(widgetList))
}