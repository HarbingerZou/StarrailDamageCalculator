import RelicSet from "./_RelicSetAbstract";
export default class Penacony_Land_of_the_Dreams implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Penacony Land of the Dreams"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff({target:[0,1,2,3]})
        buff.effect.boostMultiplierIncrease += 0.1
        buff.notes.push(`${this.setName}:
            Increases DMG for all other allies with the same DMG Type as the wearer by 10%.`)
        return buff
    }
}