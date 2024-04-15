import RelicSet from "./_RelicSetAbstract";
export default class Musketeer_of_Wild_Wheat implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Musketeer of Wild Wheat"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        return buff
    }
}