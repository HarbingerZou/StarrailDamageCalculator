import RelicSet from "./_RelicSetAbstract";

export default class Broken_Keel implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Broken Keel"
    }

    getInBattleEffect(): Buff {
        const buff:Buff = new Buff({target:[0,1,2,3]})
        buff.statsBoost.criticalDamage += 0.1
        buff.notes.push(`${this.setName}: When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10% (effective).`)
        return buff
    }
}