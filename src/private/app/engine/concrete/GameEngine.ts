import {Player} from '../../character/concrete/Player.js'
import {BattleEngine} from './BattleEngine.js'
import {MapEngine} from './MapEngine.js'
import {EventEngine} from './EventEngine.js'
import {Context} from '../../defaults/Context.js'
import {ShopEngine} from './ShopEngine.js'
import {InventoryEngine} from './InventoryEngine.js'
import {Engine} from '../Engine.js'
import {Command} from '../../defaults/Command.js'
import {Observer} from '../../../server/observer/Observer.js'
import {Socket} from 'socket.io'

export class GameEngine extends Engine {

    private readonly battleEngine: BattleEngine
    private readonly mapEngine: MapEngine
    private readonly eventEngine: EventEngine
    private readonly shopEngine: ShopEngine
    private readonly inventoryEngine: InventoryEngine

    constructor(observer: Observer) {
        super(observer)

        this.battleEngine = new BattleEngine(observer)
        this.mapEngine = new MapEngine(observer)
        this.eventEngine = new EventEngine(observer)
        this.shopEngine = new ShopEngine(observer)
        this.inventoryEngine = new InventoryEngine(observer)
    }

    public run(cmd: string, player: Player, socket: Socket) {
        if (player.meta.context == Context.START) this.eventEngine.start(cmd, player, socket)
        else {
            switch (player.meta.context) {
                case Context.FREE_ROAM:
                    this.action(cmd, player, socket)
                    break
                case Context.BATTLE:
                    this.battleEngine.action(cmd, player, socket)
                    break
                case Context.EVENT:
                    this.eventEngine.action(cmd, player, socket)
                    break
                case Context.SHOP:
                    this.shopEngine.action(cmd, player, socket)
                    break
                case Context.INVENTORY:
                    this.inventoryEngine.action(cmd, player, socket)
                    break
            }
        }
    }

    public action(cmd: string, player: Player, socket: Socket): void {
        switch (cmd) {
            case Command.W:
                this.mapEngine.action(cmd, player, socket)
                break
            case Command.A:
                this.mapEngine.action(cmd, player, socket)
                break
            case Command.S:
                this.mapEngine.action(cmd, player, socket)
                break
            case Command.D:
                this.mapEngine.action(cmd, player, socket)
                break
            case Command.INV:
                this.inventoryEngine.action(cmd, player, socket)
                break
            default:
                this.invalidAction(cmd, player, socket)
        }
    }

}
