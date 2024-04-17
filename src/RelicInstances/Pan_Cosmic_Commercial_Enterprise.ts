import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Pan_Cosmic_Commercial_Enterprise implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Pan Cosmic Commercial Enterprise"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        //buff.statsBoost.attackPercentage += Math.min(0.25*stats.statusProbability, 0.25)
        buff.statsBoost.attackPercentage +=0.25
        buff.notes.push(`${this.setName}:
            The wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate,
            up to a maximum of 25% (25% applied).`)
        return buff
    }
}