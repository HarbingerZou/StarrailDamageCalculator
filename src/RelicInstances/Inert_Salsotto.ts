import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Inert_Salsotto implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Inert Salsotto"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=2){
            const buff:Buff = new Buff({effectiveField:["ultimate", "follow up"]})
            buff.effect.boostMultiplierIncrease += 0.15
            buff.notes.push(`${this.setName}: When the wearer's current CRIT Rate reaches 50% or higher,
                the wearer's Ultimate and follow-up attack DMG increases by 15%.`)
            output.push(buff)
        }
        return output
    }
}