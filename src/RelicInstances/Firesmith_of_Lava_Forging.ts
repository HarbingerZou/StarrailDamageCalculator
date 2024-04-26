import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Firesmith_of_Lava_Forging implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Firesmith of Lava-Forging"
    }
    
    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count>=4){
            const buff:Buff = new Buff({effectiveField:["skill"]})
            buff.effect.boostMultiplierIncrease += 0.12
            buff.notes.push(`${this.setName}: Increases the wearer's Skill DMG by 12% (effective)`)

            const buff2:Buff = new Buff()
            buff2.statsBoost.fireAddHurt += 0.12
            buff2.notes.push(`${this.setName}: After unleashing Ultimate, increases the wearer's Fire DMG by 12% for next attack (effective).`)
            
            output.push(buff)
            output.push(buff2)
        }
        return output
    }
}
