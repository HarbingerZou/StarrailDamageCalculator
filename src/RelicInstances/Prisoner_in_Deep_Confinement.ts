import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Prisoner_in_Deep_Confinement implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Prisoner in Deep Confinement"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.effect.defReduction += 0.06 * 3
        buff.notes.push(`${this.setName}: For every DoT the target enemy is afflicted with,
            the wearer will ignore 6% of target's DEF when dealing DMG to them.
            This effect is valid for a max of 3 DoTs (currently 18% DEF reduction applied).`)
        return buff
    }
}