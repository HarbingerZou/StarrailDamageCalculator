import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Celestial_Differentiator implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Celestial Differentiator"
    }


    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        const buff:Buff = new Buff()
        //buff.notes.push(`${this.setName}: Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack.`)
        return output
    }

}
