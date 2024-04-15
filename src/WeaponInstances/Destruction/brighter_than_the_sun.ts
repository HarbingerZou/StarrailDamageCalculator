import Weapon from "../_WeaponAbstract";

export default class brighter_than_the_sun extends Weapon{
    constructor(holderPath:path, level: number, promotion: number, rankLevel: number) {
        const name = "Brighter Than the Sun";
        const path:path = "destruction";
        const effectName = "Defiant Till Death"
        super(holderPath,name,path,effectName, level,promotion,rankLevel)
    }
    getInBattleEffect(): Buff | Buff[] | OnEnemyDeBuff | OnEnemyDeBuff[] {
        if(this.isEffective()){
            const buff:Buff = new Buff()
            const attackBoostPercentage = 0.15+0.03*this.rankLevel
            const spBoostPercentage = 0.05+0.01*this.rankLevel
            buff.statsBoost.attackPercentage += attackBoostPercentage * 2 
            buff.statsBoost.spRatio += spBoostPercentage * 2
            buff.notes.push(`${this.effectName}: Increases the wearer's Attack by ${round(attackBoostPercentage*100)}% 
            and Energy Regen Rate by ${round(spBoostPercentage*100)}% for every stack of Dragon's Call
            (currently 2 stacks applied).`)
            
            return buff
        }else{
            return []
        }
    }

}