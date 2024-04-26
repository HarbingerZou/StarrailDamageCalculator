import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Eagle_of_Twilight_Line implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Eagle of Twilight Line"
    }

    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        const buff:Buff = new Buff()
        //buff.notes.push(`${this.setName}: After the wearer uses their Ultimate, their action is Advanced Forward by 25%.`)
        return output
    }
}
