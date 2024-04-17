import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";


export default class Band_of_Sizzling_Thunder implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Band of Sizzling Thunder"
    }

    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.attackPercentage += 0.2
        buff.notes.push(`${this.setName}: When the wearer uses Skill, increases the wearer's ATK by 20% for 1 turn(s).`)
        return buff
    }
}