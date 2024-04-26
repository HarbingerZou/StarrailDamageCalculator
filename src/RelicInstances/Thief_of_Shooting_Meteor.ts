import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Thief_of_Shooting_Meteor implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Thief of Shooting Meteor"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        const buff:Buff = new Buff()
        //buff.notes.push(`${this.setName}: When the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy.`)
        return output
    }
}