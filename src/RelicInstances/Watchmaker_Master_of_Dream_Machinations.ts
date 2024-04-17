import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Watchmaker_Master_of_Dream_Machinations implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Watchmaker Master of Dream Machinations"
    }

    getInBattleEffect(): Buff {
        const buff:Buff = new Buff({target:[0,1,2,3]})
        buff.statsBoost.stanceBreakRatio += 0.3
        buff.notes.push(`${this.setName}: 
            When the wearer uses their Ultimate on an ally, 
            Break Effect for all allies increases by 30% for 2 turn(s). 
            This effect cannot be stacked.`)
        return buff
    }
}
