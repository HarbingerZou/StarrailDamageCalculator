import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";

export default class Knight_of_Purity_Palace implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Knight of Purity Palace"
    }
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=4){
            const buff:Buff = new Buff()
            buff.effect.shieldAbsorb += 0.2
            buff.notes.push(`${this.setName}:
                Increases the max DMG that can be absorbed by the shield created by the wearer by 20%.`)
            output.push(buff)
        }
        return output
    }
}