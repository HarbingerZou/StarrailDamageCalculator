import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Firmament_Frontline_Glamoth implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Firmament Frontline Glamoth"
    }

    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=2){
            const buff:Buff = new Buff()
            buff.effect.boostMultiplierIncrease += 0.18
            buff.notes.push(`${this.setName}: When the wearer's SPD is equal to or higher than 135/160, the wearer deals 12%/18% more DMG (currently 18%).`)
            output.push(buff)
        }
        return output
    }
}