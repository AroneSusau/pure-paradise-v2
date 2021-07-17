import { Point } from '../util/Point'
import { AreaNames } from './AreaNames'
import { GameMap } from './GameMap'

export class PureParadiseMap extends GameMap {

    public name: AreaNames
    public coords: Point
    public raw: Array<number>

    constructor() {
        super()

        this.name = AreaNames.PURE_PARADISE
        this.coords = new Point(1, 1)

        this.raw = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3,
            3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3,
            0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 10,
            5, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 10, 5, 5,
            5, 5, 11, 3, 3, 4, 17, 3, 3, 4, 17, 3, 3, 4, 17, 3, 10, 5, 5, 5,
            5, 5, 5, 20, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 21, 5, 5, 5, 6,
            6, 6, 4, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 4, 6, 6, 6,
            84, 6, 4, 5, 4, 6, 4, 5, 4, 6, 4, 5, 4, 6, 4, 5, 4, 6, 84, 6,
            6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 6, 6, 5, 2, 5, 6, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 6, 10, 10, 4, 11, 11, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 10, 10, 10, 4, 11, 11, 11, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 4, 4, 4, 13, 4, 4, 4, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 4, 6, 6, 5,
            5, 5, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 5, 5, 1,
            1, 1, 1, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 1, 1, 1, 1,
            1, 1, 11, 10, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 1
        ]
    }
}
