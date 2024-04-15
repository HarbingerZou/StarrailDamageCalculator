import Weapon from "../_WeaponAbstract";
export default class In_the_Name_of_the_World extends Weapon{
    constructor(holderPath:path,level: number, promotion: number, rankLevel: number) {
        const name = "In the Name of the World";
        const path:path = "nihility";
        const effectName = "Inheritor"
        super(holderPath,name,path,effectName, level,promotion,rankLevel)
    }
    getInBattleEffect(): Buff | Buff[] | OnEnemyDeBuff | OnEnemyDeBuff[] {
        if(this.isEffective()){
            const buff:Buff = new Buff()
            const globalDamageBoost = 0.2+0.04*this.rankLevel
            buff.effect.boostMultiplierIncrease += globalDamageBoost
            buff.notes.push(`${this.effectName}: Increases the wearer's DMG to debuffed enemies by 
                ${round(globalDamageBoost*100)}%.`)

            const buff2:Buff = new Buff()
            const effectHitBoost = 0.15+0.03*this.rankLevel
            buff2.statsBoost.statusProbability += effectHitBoost
            const ATKboost = 0.2+0.04*this.rankLevel
            buff2.statsBoost.attackPercentage += ATKboost
            buff2.notes.push(`${this.effectName}: When the wearer uses their Skill, 
                the Effect Hit Rate for this attack increases by ${round(effectHitBoost*100)}%, 
                and ATK increases by ${round(ATKboost*100)}%.`)
                 
            return [buff,buff2]
        }else{
            return []
        }
    }
}