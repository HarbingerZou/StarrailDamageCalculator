import { Buff, OnEnemyDeBuff } from "../../LocalInterfaces";
import Weapon from "../_WeaponAbstract";
export default class Along_the_Passing_Shore extends Weapon{
    constructor(holderPath:path,level: number, promotion: number, rankLevel: number) {
        const name = "Along the Passing Shore";
        const path:path = "nihility";
        const effectName = "Steerer"
        super(holderPath,name,path,effectName, level,promotion,rankLevel)
    }
    getInBattleEffect(): Buff | Buff[] | OnEnemyDeBuff | OnEnemyDeBuff[] {
        if(this.isEffective()){
            const buff:Buff = new Buff()
            const globalDamageBoost = 0.2+0.04*this.rankLevel
            buff.effect.boostMultiplierIncrease += globalDamageBoost
            buff.notes.push(`${this.effectName}: The wearer deals ${round(globalDamageBoost*100)}% 
                increased DMG to targets afflicted with Mirage Fizzle`)

            const buff2:Buff = new Buff({effectiveField:["ultimate"]})
            const ultimateDamageBoost = 0.2+0.04*this.rankLevel
            buff2.effect.boostMultiplierIncrease += ultimateDamageBoost
            buff2.notes.push(`${this.effectName}: The DMG dealt by the wearer's Ultimate additionally 
            increases by ${round(globalDamageBoost*100)}%.`)
                 
            return [buff,buff2]
        }else{
            return []
        }
    }
}