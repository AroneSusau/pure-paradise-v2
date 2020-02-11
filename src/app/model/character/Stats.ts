export class Stats { 

  private _damage: number
  private _isAlive: boolean
  private _defence: number
  private _health: number
  private _hunger: number
  private _thirst: number
  private _money: number

  public get damage(): number {
    return this._damage
  }
  public set damage(value: number) {
    this._damage = value
  }
  
  public get defence(): number {
    return this._defence
  }
  public set defence(value: number) {
    this._defence = value
  }
  
  public get health(): number {
    return this._health
  }
  public set health(value: number) {
    this._health = value
  }
  
  public get hunger(): number {
    return this._hunger
  }
  public set hunger(value: number) {
    this._hunger = value
  }
  
  public get thirst(): number {
    return this._thirst
  }
  public set thirst(value: number) {
    this._thirst = value
  }
  public get money(): number {
    return this._money
  }
  public set money(value: number) {
    this._money = value
  }
  
  public get isAlive(): boolean {
    return this._isAlive
  }
  public set isAlive(value: boolean) {
    this._isAlive = value
  }

}