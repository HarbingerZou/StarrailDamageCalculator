import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Talia_Kingdom_of_Banditry implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Talia: Kingdom of Banditry"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.stanceBreakRatio += 0.2
        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 145 or higher, the wearer's Break effect increases by an extra 20% (effective).`)
        return buff
    }
}