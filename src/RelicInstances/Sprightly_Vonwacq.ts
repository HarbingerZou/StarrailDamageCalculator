import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Sprightly_Vonwacq implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Sprightly Vonwacq"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        const buff:Buff = new Buff()
        /*
        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher,
             the wearer's action is Advanced Forward by 40% immediately upon entering battle (effective).`)*/
        return output
    }
}