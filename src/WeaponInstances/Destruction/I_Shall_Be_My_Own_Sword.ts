import Weapon from "../_WeaponAbstract";
export default class I_Shall_Be_My_Own_Sword extends Weapon{
    constructor(holderPath:path,level: number, promotion: number, rankLevel: number) {
        const name = "I Shall Be My Own Sword";
        const path:path = "destruction";
        const effectName = "With This Evening Jade"
        super(holderPath, name,path,effectName, level,promotion,rankLevel)
    }
    getInBattleEffect(): Buff | Buff[] | OnEnemyDeBuff | OnEnemyDeBuff[] {
        if(this.isEffective()){
            const buff:Buff = new Buff()
            const damageBoostPercentage = (0.115+0.025*this.rankLevel)
            const defReduceBoostPercentage = (0.1+0.02*this.rankLevel)
            buff.effect.boostMultiplierIncrease += damageBoostPercentage*3
            buff.effect.defReduction += defReduceBoostPercentage
            
            buff.notes.push(`${this.effectName}: Each stack of Eclipse increases the DMG of the wearer's next attack 
                by ${round(damageBoostPercentage*100)}%. When 3 stack(s) are reached, additionally enables the attack
                to ignore ${round(defReduceBoostPercentage*100)}% of the enemy's DEF.`)
            
            return buff
        }else{
            return []
        }
    }
}