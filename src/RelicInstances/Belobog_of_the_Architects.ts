import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Belobog_of_the_Architects implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Belobog of the Architects"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.defensePercentage += 0.15
        buff.notes.push(`${this.setName}: When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF (effective).`)
        return buff
    }
}