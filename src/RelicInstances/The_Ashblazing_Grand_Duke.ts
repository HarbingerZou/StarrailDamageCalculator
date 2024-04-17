import { Buff } from "../LocalInterfaces";
import RelicSet from "./_RelicSetAbstract";
export default class The_Ashblazing_Grand_Duke implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "The Ashblazing Grand Duke"
    }
    getInBattleEffect(): Buff[] {
        const buff:Buff = new Buff({effectiveField:["follow up"]})
        buff.effect.boostMultiplierIncrease += 0.2
        buff.notes.push(`${this.setName}: Increases follow-up attack DMG by 20%.`)

        const buff2:Buff = new Buff()
        buff.statsBoost.attackPercentage += 0.06 * 8
        buff.notes.push(`${this.setName}: When the wearer uses follow-up attacks against the target enemy,
            increase the wearer's ATK by 6% for every time the follow-up attack deals DMG.
            This effect can stack for a maximum of 8 times and lasts for 3 turns (currently 8 stacks counted)).`)

        return [buff,buff2]
    }
}