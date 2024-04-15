import RelicSet from "./_RelicSetAbstract";

export default class Passerby_of_Wandering_Cloud implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Passerby of Wandering Cloud"
    }
    getInBattleEffect(): Buff{
        const buff:Buff = new Buff()
        /*buff.notes.push(`${this.setName}:
            At the beginning of the battle, immediately recovers 1 Skill Point.`)*/
        return buff
    }
}