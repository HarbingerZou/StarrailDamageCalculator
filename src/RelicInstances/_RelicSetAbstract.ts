export default interface RelicSet{
    count:number
    setName:string

    //return an effect
    getInBattleEffect(): Buff|Buff[]|OnEnemyDeBuff|OnEnemyDeBuff[];

    //This method should be an method to get the effect and apply them conditionally 
    getInBattleEffectConditionally?(): Buff|Buff[]|OnEnemyDeBuff|OnEnemyDeBuff[];

    //This should be the method to add Stat bonus already included in incoming stats file in thorugh UID search
    getPreBattleEffect?(): Buff|Buff[]|OnEnemyDeBuff|OnEnemyDeBuff[];
}
