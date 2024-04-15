import RelicSet from "./_RelicSetAbstract";

export default class Genius_of_Brilliant_Stars implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Genius of Brilliant Stars"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.effect.defReduction += 0.2
        buff.notes.push(`${this.setName}: When the wearer deals DMG to the target enemy, ignores 10% DEF.
            If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF.
            (currently 20% DEF Reduction Applied)`)
        return buff
    }
}