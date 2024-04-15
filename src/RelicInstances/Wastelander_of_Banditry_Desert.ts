import RelicSet from "./_RelicSetAbstract";

export default class Wastelander_of_Banditry_Desert implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Wastelander of Banditry Desert"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.criticalChance += 0.1
        buff.statsBoost.criticalDamage += 0.2
        buff.notes.push(`${this.setName}: 
            When attacking debuffed enemies, 
            the wearer's CRIT Rate increases by 10%, 
            and their CRIT DMG increases by 20% against Imprisoned enemies.`)
        return buff
    }
}
