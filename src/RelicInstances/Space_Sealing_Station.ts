import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Space_Sealing_Station implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Space Sealing Station"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=2){
            const buff:Buff = new Buff()
            buff.statsBoost.attackPercentage += 0.12
            buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher,
                the wearer's ATK increases by an extra 12% (effective).`)
            output.push(buff)
        }
        return output
    }
}