import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class Champion_of_Streetwise_Boxing implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Champion of Streetwise Boxing"
    }

    getInBattleEffect(): Buff[] {
        const output:Buff[] = []
        if(this.count >=4){
            const buff:Buff = new Buff()
            buff.statsBoost.attackPercentage += 0.5*5
            buff.notes.push(`${this.setName}: After the wearer attacks or is hit,
                their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s).`)
            output.push(buff)
        } 
        return output
    }
}
