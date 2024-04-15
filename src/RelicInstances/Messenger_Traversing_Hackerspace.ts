import RelicSet from "./_RelicSetAbstract";

export default class Messenger_Traversing_Hackerspace implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Messenger Traversing Hackerspace"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff({target:[0,1,2,3]})
        buff.statsBoost.speedPercentage += 0.12
        buff.notes.push(`${this.setName}: When the wearer uses their Ultimate on an ally,
            SPD for all allies increases by 12% for 1 turn(s).
            This effect cannot be stacked.`)
        return buff
    }
}