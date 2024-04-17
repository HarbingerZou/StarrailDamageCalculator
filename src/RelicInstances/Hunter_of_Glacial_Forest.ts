import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Hunter_of_Glacial_Forest implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Hunter of Glacial Forest"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.statsBoost.criticalDamage += 0.25
        buff.notes.push(`${this.setName}: After the wearer unleashes their Ultimate, their CRIT DMG increases by 25% for 2 turn(s).`)
        return buff
    }
}