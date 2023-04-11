interface Tile {
    id: string
    name: string
    widget: string
    position: TilePosition
    meta: object
}

interface TilePosition {
    w: number
    h: number
    x: number
    y: number
}