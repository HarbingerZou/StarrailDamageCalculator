import RelicSet from "./_RelicSetAbstract";

export default class Sigonia_the_Unclaimed_Desolation implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Sigonia the Unclaimed Desolation"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.criticalDamage += 0.04 * 10
        buff.notes.push(`${this.setName}: When an enemy target gets defeated,
            the wearer's CRIT DMG increases by 4%, stacking up to 10 time(s)
            (currently 10 stacks applied).`)
        return buff
    }
}