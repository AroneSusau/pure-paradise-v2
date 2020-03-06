import {GameMap} from '../GameMap.js'
import {AreaNames} from '../../defaults/AreaNames.js'
import {Point} from '../../character/point/Point.js'
import {Defaults} from '../../defaults/Defaults.js'

export class Tirera extends GameMap {

    constructor(defaults: Defaults) {
        super()

        this._name = AreaNames.TIRERA
        this._coords = new Point()

        this._raw = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 0, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3,
            3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3,
            3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 3, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ]

        defaults.applyMapDefaults(this)
    }
}