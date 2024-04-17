import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Guard_of_Wuthering_Snow implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Guard of Wuthering Snow"
    }

    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        /*
        buff.notes.push(`${this.setName}: At the beginning of the turn,
            if the wearer's HP is equal to or less than 50% of their Max HP,
            restores HP equal to 8% of their Max HP and regenerates 5 Energy.`)
        */
        return buff
    }
}