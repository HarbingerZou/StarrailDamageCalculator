import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Rutilant_Arena implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Rutilant Arena"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff({effectiveField:[`basic attack`,"skill"]})
        buff.effect.boostMultiplierIncrease += 0.2
        buff.notes.push(`${this.setName}: When the wearer's current CRIT Rate reaches 70% or higher,
            the wearer's Basic ATK and Skill DMG increase by 20% (effective)`)
        return buff
    }
}