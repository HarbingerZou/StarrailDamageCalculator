import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Izumo_Gensei_and_Takama_Divine_Realm implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Izumo Gensei and Takama Divine Realm"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=2){
            const buff:Buff = new Buff()
            buff.statsBoost.criticalChance += 0.12
            buff.notes.push(`${this.setName}: When entering battle
                if at least one other ally follows the same Path as the wearer,
                then the wearer's CRIT Rate increases by 12%.`)
            output.push(buff)
        }
        return output
    }
}