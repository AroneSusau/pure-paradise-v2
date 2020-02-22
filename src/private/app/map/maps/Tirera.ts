import {GameMap} from '../GameMap.js'
import {AreaNames} from '../../defaults/AreaNames.js'
import {Point} from '../../character/point/Point.js'

export class Tirera extends GameMap {

    constructor(x: number, y: number, length: number) {
        super()

        this._name = AreaNames.TIRERA
        this._coords = new Point(x, y, length)

        this._raw = [
            2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3,
            2, 2, 2, 2, 3, 3, 5, 5, 5, 5, 5, 3, 3, 2, 2, 2, 2, 2, 3, 3,
            2, 2, 3, 3, 3, 10, 9, 9, 9, 9, 9, 11, 3, 2, 2, 2, 2, 2, 3, 3,
            2, 2, 3, 3, 10, 9, 76, 84, 84, 73, 88, 9, 11, 2, 2, 2, 2, 2, 3, 3,
            3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 3, 3,
            3, 3, 3, 3, 4, 1, 1, 5, 5, 5, 1, 1, 4, 3, 2, 2, 2, 3, 3, 3,
            3, 3, 3, 3, 4, 7, 8, 4, 0, 4, 7, 8, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 4, 1, 1, 4, 13, 4, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 4, 5, 5, 4, 5, 4, 5, 5, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3
        ]
    }
}
