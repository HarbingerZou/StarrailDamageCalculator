import RelicSet from "./_RelicSetAbstract";
export default class Longevous_Disciple implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Longevous Disciple"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.criticalChance += 0.08*2
        buff.notes.push(`${this.setName}:
            When the wearer is hit or has their HP consumed by an ally or themselves,
            their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks.`)
        return buff
    }
}