import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Fleet_of_the_Ageless implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Fleet of the Ageless"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=2){
            const buff:Buff = new Buff({target:[0,1,2,3]})
            buff.statsBoost.attackPercentage  += 0.08
            buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8% (effective).`)
            output.push(buff)
        }
        return output
    }
}