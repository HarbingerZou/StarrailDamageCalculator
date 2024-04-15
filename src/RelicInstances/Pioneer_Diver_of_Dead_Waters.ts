import RelicSet from "./_RelicSetAbstract";

export default class Pioneer_Diver_of_Dead_Waters implements RelicSet{
    setName: string;
    count: number;
    constructor(count:number){
        this.count = count;
        this.setName = "Pioneer Diver of Dead Waters"
    }
    getInBattleEffect(): Buff {
        const buff:Buff = new Buff()
        buff.effect.boostMultiplierIncrease += 0.12
        buff.statsBoost.criticalDamage += 0.12 * 2
        buff.notes.push(`${this.setName}: Increases DMG dealt to enemies with debuffs by 12% (effective).`)
        buff.notes.push(`${this.setName}:
            The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs.
            After the wearer inflicts a debuff on enemy targets,
            the aforementioned effects increase by 100%, lasting for 1 turn.
            (currently 24% damage boost applied)`)
        return buff
    }
}