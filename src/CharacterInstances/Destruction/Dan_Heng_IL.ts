import { Buff, skill_Coef_all_level, ValidTarget } from "../../LocalInterfaces";
import { Stats } from "../../ReqJSONInterfaces";
import { getBasicCoefficientDependentStats, getSkillTalentCoef, getUltimateCoefficientDependentStats, Context, getAllBuffOnCharacter } from "../../scenarioSetting";
import { Multipliers } from "../../singleEnemyDamageCalculation";
import {Character,LocalContext, HasLocalContext, InTurnContext} from "../_CharacterAbstract";

//store info only relevant to this character
type localBuffName = "LeapResPen"| "DracoreLibre"|
 "RighteousHeart" | "RighteousHeart" | "imagWeakCritDamageIncrease"

class Dan_Heng_IL_Local_Context implements LocalContext{
    maxRighteousHeart:number = 6
    RighteousHeartGainPerAttack:number = 1

    localBuffs:Partial<Record<localBuffName,Buff>>
    constructor(){
        this.maxRighteousHeart = 6
        this.localBuffs = {}
    }
}

//store info for each turn
class Dan_Heng_IL_In_Turn_Context implements InTurnContext{
    DracoreLibreCount:number
    constructor(DracoreLibreCount=0){
        this.DracoreLibreCount = DracoreLibreCount
    }
}

class Dan_Heng_IL extends Character<skill_Coef_all_level[], number[], skill_Coef_all_level, number[]> implements HasLocalContext{
    localContext: Dan_Heng_IL_Local_Context;
    inTurnContext: Dan_Heng_IL_In_Turn_Context
    constructor(level: number, eidolon: number, basic_level: number, skill_level: number, ultimate_level: number, talent_level: number, trace1: boolean, trace2: boolean, trace3: boolean, stats:Stats) {
        const name: string = "Dan Heng IL";
        const path: path = "destruction"; 
        const element: element = "imaginary"; 
        
        // Basic for Fulgurant Leap
        const basic_data: skill_Coef_all_level[] = [
            getBasicCoefficientDependentStats({ATK:1}),
            getBasicCoefficientDependentStats({ATK:2.6}),
            getBasicCoefficientDependentStats({ATK:3.8}),
            getBasicCoefficientDependentStats({ATK:5})
        ]
        
        // Skill for Dracore Libre
        const skill_data: number[] = getSkillTalentCoef(0.06);
        const ultimate_data: skill_Coef_all_level = getUltimateCoefficientDependentStats({ATK:1.5});
        const talent_data: number[] = getSkillTalentCoef(0.05)
       
        super(name, eidolon,  path, element, level,
            basic_level, skill_level, ultimate_level, talent_level,
            trace1, trace2, trace3,
            basic_data, skill_data, ultimate_data, talent_data, 
            stats
        ) 
        this.localContext = new Dan_Heng_IL_Local_Context()
        this.inTurnContext = new Dan_Heng_IL_In_Turn_Context()
    }

    addEidolons(context:Context){
        if(this.eidolon>=1){
            this.localContext.maxRighteousHeart += 4
            this.localContext.RighteousHeartGainPerAttack += 1
        }
        if(this.eidolon >=6){
            const buff = new Buff()
            buff.effect.resMultiplierIncrease += 0.2*3
            buff.notes.push(`E6 Reign, Returned: After any other ally uses their Ultimate, the Imaginary RES PEN of Dan Heng • Imbibitor Lunae's next Fulgurant Leap attack increases by 20%, up to 3 stacks.`)
            this.localContext.localBuffs.LeapResPen = buff
        }
    }

    addTraces(context:Context){
        if(this.trace3){
            const buff = new Buff()
            const criticalDamageIncrease = 0.24
            buff.statsBoost.criticalDamage += criticalDamageIncrease
            buff.notes.push(`Jolt Anew: This character's CRIT DMG increases by ${round(criticalDamageIncrease*100)}% when dealing DMG to enemy targets with Imaginary Weakness.`)
            this.localContext.localBuffs.imagWeakCritDamageIncrease = buff
        }
    }

    addPassiveSkill(context:Context){
        const buff = new Buff()
        const eachHeartGain = this.talent_data[this.talent_level-1] 
        const talentBoost = eachHeartGain * this.localContext.maxRighteousHeart / 2
        buff.effect.boostMultiplierIncrease += talentBoost;
        buff.notes.push(`Righteous Heart: Damage increase by ${round(talentBoost*100)} (Approximated)%`)
        this.localContext.localBuffs.RighteousHeart = buff

        //add Dracore Libre
        const critDamageIncreasePerStack = this.skill_data[this.skill_level-1];
        const buff2 = new Buff({effectiveField:["basic attack"]})
        const critDamageIncrease =  critDamageIncreasePerStack*2.2
        buff2.statsBoost.criticalDamage += critDamageIncreasePerStack*2.2
        buff2.notes.push(`Dracore Libre: CRIT DMG increase by ${round(critDamageIncrease*100)}%`)
        
        this.localContext.localBuffs.DracoreLibre = buff2
    }
    getDisplayData1(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
        throw new Error("Method not implemented.");
    }
    getDisplayData2(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
        throw new Error("Method not implemented.");
    }
    getDisplayData3(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
        throw new Error("Method not implemented.");
    }
    /*
    basicAttackPressed(context: Context, currentCharacterIndex: ValidTarget): Multipliers[] {
        const buff = getAllBuffOnCharacter(context,currentCharacterIndex).filter(buff=>buff.effectiveField.includes("basic attack"))
        this.addEffect(context)
        const localBuffList = this.localContext.localBuffs
        //Assume enemy always have imagine weakness
        let output:Multipliers[] = []
        if(localBuffList.imagWeakCritDamageIncrease !== undefined){
            buff.concat(localBuffList.imagWeakCritDamageIncrease)
        }

        if(this.inTurnContext.DracoreLibreCount === 0){
            output = [new Multipliers(this.level, this.element, this.stats, this.basic_data[0].allLevelCoef[this.basic_level-1],
                1, buff, context.enemy[2]
            )]
        }else if(this.inTurnContext.DracoreLibreCount === 1){
            output = [new Multipliers(this.level, this.element, this.stats, this.basic_data[1].allLevelCoef[this.basic_level-1],
                1, buff, context.enemy[2]
            )]
        }else if(this.inTurnContext.DracoreLibreCount === 2){
            const mainBuffs = [...buff]
            const sideBuffs = [...buff]

            if(localBuffList.DracoreLibre_main !== undefined){
                mainBuffs.concat(localBuffList.DracoreLibre_main)
            }
            if(localBuffList.RighteousHeart_main !== undefined){
                mainBuffs.concat(localBuffList.RighteousHeart_main)
            }

            if(localBuffList.DracoreLibre_side !== undefined){
                sideBuffs.concat(localBuffList.DracoreLibre_side)
            }
            if(localBuffList.RighteousHeart_side !== undefined){
                sideBuffs.concat(localBuffList.RighteousHeart_side)
            }
            output = [
                new Multipliers(this.level, this.element, this.stats, this.basic_data[2].allLevelCoef[this.basic_level-1],
                    3/19, sideBuffs, context.enemy[1]
                ),
                new Multipliers(this.level, this.element, this.stats, this.basic_data[2].allLevelCoef[this.basic_level-1],
                    1, mainBuffs, context.enemy[2]
                ),
                new Multipliers(this.level, this.element, this.stats, this.basic_data[2].allLevelCoef[this.basic_level-1],
                    3/19, sideBuffs, context.enemy[3]
                )
            ]
        }else{
            //leap 
            if(localBuffList.LeapResPen !== undefined){
                buff.concat(localBuffList.LeapResPen)
            }
            const mainBuffs = [...buff]
            const sideBuffs = [...buff]
            if(localBuffList.DracoreLibre_main !== undefined){
                mainBuffs.concat(localBuffList.DracoreLibre_main)
            }
            if(localBuffList.RighteousHeart_main !== undefined){
                mainBuffs.concat(localBuffList.RighteousHeart_main)
            }
            if(localBuffList.DracoreLibre_side !== undefined){
                sideBuffs.concat(localBuffList.DracoreLibre_side)
            }
            if(localBuffList.RighteousHeart_side !== undefined){
                sideBuffs.concat(localBuffList.RighteousHeart_side)
            }
            output = [
                new Multipliers(this.level, this.element, this.stats, this.basic_data[3].allLevelCoef[this.basic_level-1],
                    9/25, sideBuffs, context.enemy[1]
                ),
                new Multipliers(this.level, this.element, this.stats, this.basic_data[3].allLevelCoef[this.basic_level-1],
                    1, mainBuffs, context.enemy[2]
                ),
                new Multipliers(this.level, this.element, this.stats, this.basic_data[3].allLevelCoef[this.basic_level-1],
                    9/25, sideBuffs, context.enemy[3]
                )
            ]
        }
        this.inTurnContext = new Dan_Heng_IL_In_Turn_Context()
        return output
    }

    skillPressed(context: Context, currentCharacterIndex: ValidTarget): void {
        this.inTurnContext.DracoreLibreCount ++
    }
    ultimatePressed(context: Context, currentCharacterIndex: ValidTarget): void | Multipliers[] {
        const buff = getAllBuffOnCharacter(context,currentCharacterIndex).filter(buff=>buff.effectiveField.includes("basic attack"))
        this.inTurnContext.DracoreLibreCount = -1
        this.addEffect(context)
        const localBuffList = this.localContext.localBuffs
        //Assume enemy always have imagine weakness
        if(localBuffList.imagWeakCritDamageIncrease !== undefined){
            buff.concat(localBuffList.imagWeakCritDamageIncrease)
        }
        const mainBuffs = [...buff]
        const sideBuffs = [...buff]
        if(localBuffList.RighteousHeart_main !== undefined){
            mainBuffs.concat(localBuffList.RighteousHeart_main)
        }
        if(localBuffList.RighteousHeart_side !== undefined){
            sideBuffs.concat(localBuffList.RighteousHeart_side)
        }

        let output:Multipliers[] = [
            new Multipliers(this.level, this.element, this.stats, this.ultimate_data.allLevelCoef[this.ultimate_level-1],
                7/15, sideBuffs, context.enemy[1]
            ),
            new Multipliers(this.level, this.element, this.stats, this.ultimate_data.allLevelCoef[this.ultimate_level-1],
                1, mainBuffs, context.enemy[2]
            ),
            new Multipliers(this.level, this.element, this.stats, this.ultimate_data.allLevelCoef[this.ultimate_level-1],
                7/15, sideBuffs, context.enemy[3]
            )
        ]
    }*/
}   
/*
class Dan_Heng_IL_Info implements getDamageBuffInfo{
    character: Character<skill_Coef_all_level[], number[], skill_Coef_all_level, number[]>
    constructor(character:Character<skill_Coef_all_level[], number[], skill_Coef_all_level, number[]>){
        this.character = character
    }
    getDisplayData1(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
         this.character.skillPressed(context, currentCharacterIndex)
         this.character.skillPressed(context, currentCharacterIndex)
         const multipliers:Multipliers[]|void = this.character.basicAttackPressed(context, currentCharacterIndex)
         if(multipliers){
            console.log(multipliers[0].getStraightDamageWithFinalStats())
            return multipliers.map(multiplier => multiplier.getFlatMultipliers())
         }
    }
    getDisplayData2(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
        this.character.skillPressed(context, currentCharacterIndex)
        this.character.skillPressed(context, currentCharacterIndex)
        this.character.skillPressed(context, currentCharacterIndex)
        const multipliers:Multipliers[]|void = this.character.basicAttackPressed(context, currentCharacterIndex)
        
        if(multipliers){
            return multipliers.map(multiplier => multiplier.getFlatMultipliers())
        }
    }
    getDisplayData3(context: Context, currentCharacterIndex: ValidTarget): FlatMultipliersInterface[] | undefined {
        const multipliers:Multipliers[]|void = this.character.ultimatePressed(context, currentCharacterIndex)
        
        if(multipliers){
            return multipliers.map(multiplier => multiplier.getFlatMultipliers())
        }
    }

}
*/
export {Dan_Heng_IL}