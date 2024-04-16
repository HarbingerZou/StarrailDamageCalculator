import {Character,LocalContext, HasLocalContext, InTurnContext} from "../_CharacterAbstract";

//store info only relevant to this character
class Dan_Heng_IL_Local_Context implements LocalContext{
    maxRighteousHeart:number = 6
    RighteousHeartGainPerAttack:number = 1

    localBuffs:Record<string,Buff>
    Divine_Spear_Dracore_Libre_total_stack:number = 3
    Fulgurant_Leap_Dracore_Libre_total_stack:number = 10
    Divine_Spear_Dracore_Libre_side_attack_count:number = 2
    Fulgurant_Leap_Dracore_Libre_side_attack_count:number = 4
    Divine_Spear_Dracore_Libre_main_attack_count:number = 5
    Fulgurant_Leap_Dracore_Libre_main_attack_count:number = 7

    Azures_Aqua_Ablutes_All_attack_count = 3
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

export default class Dan_Heng_IL extends Character<skill_Coef_all_level[], number[], number[], number[]> implements HasLocalContext{
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
        const ultimate_data: number[] = getUltimateCoefficient(1.5);
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
        }
    }

    addPassiveSkill(context:Context){
        const buff_main = new Buff()
        const buff_side = new Buff()
        const eachHeartGain = this.talent_data[this.talent_level-1] 
        let talentBoost:number = 0
        let talentBoost2:number = 0;
        const heartGainPerAttack = this.localContext.RighteousHeartGainPerAttack
        if(this.inTurnContext.DracoreLibreCount === 0){
            talentBoost = eachHeartGain*heartGainPerAttack*0/1
        }else if(this.inTurnContext.DracoreLibreCount === 1){
            //maxium 2 or 4, cumulative 3 or 6
            talentBoost = eachHeartGain*heartGainPerAttack*3/3
        }else if(this.inTurnContext.DracoreLibreCount === 2){
            //maxium 4 or 8,
            talentBoost = eachHeartGain*heartGainPerAttack*10/5
            talentBoost2 = eachHeartGain*heartGainPerAttack*7/2
        }else if(this.inTurnContext.DracoreLibreCount === 3){
            if (heartGainPerAttack === 1) {
                talentBoost = eachHeartGain * 1 * 21 / 7;
                talentBoost2 = eachHeartGain * 1 * 18 / 4;
            } else {
                //2, 4, 6, 8, 10, 10
                talentBoost = eachHeartGain * 2 * 20 / 7;
                talentBoost2 = eachHeartGain * 2 * 17 / 4;
            }
        }else{
            //this one for ultimate
            talentBoost = eachHeartGain*heartGainPerAttack*3/3
        }
        buff_main.effect.boostMultiplierIncrease += talentBoost;
        buff_main.notes.push(`Righteous Heart: Damage increase by ${round(talentBoost*100)} (main Target)%`)
        this.localContext.localBuffs.RighteousHeart_main = buff_main

        buff_side.effect.boostMultiplierIncrease += talentBoost2;
        buff_side.notes.push(`Righteous Heart: Damage increase by ${round(talentBoost2*100)} (side Target)%`)
        this.localContext.localBuffs.RighteousHeart_side = buff_side

        
        const critDamageIncreasePerStack = this.skill_data[this.skill_level-1];
        const buff2_main = new Buff({effectiveField:["basic attack"]})
        const buff2_side = new Buff({effectiveField:["basic attack"]})
        let criticalDamageIncrease_main = 0
        let criticalDamageIncrease_side = 0
        if(this.inTurnContext.DracoreLibreCount == 2){
            criticalDamageIncrease_main = critDamageIncreasePerStack*
                this.localContext.Divine_Spear_Dracore_Libre_total_stack/
                this.localContext.Divine_Spear_Dracore_Libre_main_attack_count

            criticalDamageIncrease_side = critDamageIncreasePerStack*
            this.localContext.Divine_Spear_Dracore_Libre_total_stack/
            this.localContext.Divine_Spear_Dracore_Libre_side_attack_count
        }
        if(this.inTurnContext.DracoreLibreCount === 3){
            criticalDamageIncrease_main = critDamageIncreasePerStack*
                this.localContext.Fulgurant_Leap_Dracore_Libre_total_stack/
                this.localContext.Fulgurant_Leap_Dracore_Libre_main_attack_count

            criticalDamageIncrease_side = critDamageIncreasePerStack*
                this.localContext.Fulgurant_Leap_Dracore_Libre_total_stack/
                this.localContext.Fulgurant_Leap_Dracore_Libre_side_attack_count
        }

        buff2_main.statsBoost.criticalDamage += criticalDamageIncrease_main
        buff2_main.notes.push(`Dracore Libre: CRIT DMG increase by ${round(criticalDamageIncrease_main*100)}%`)
       
        buff2_side.statsBoost.criticalDamage += criticalDamageIncrease_side
        buff2_side.notes.push(`Dracore Libre: CRIT DMG increase by ${round(criticalDamageIncrease_side*100)}%`)
        
        this.localContext.localBuffs.DracoreLibre_main = buff2_main
        this.localContext.localBuffs.DracoreLibre_side = buff2_side
    }

    basicAttackPressed(context: Context, currentCharacterIndex: ValidTarget): Multipliers[] {
        const buff = getAllBuffOnCharacter(context,currentCharacterIndex).filter(buff=>buff.effectiveField.includes("basic attack"))
        const localBuffList = this.localContext.localBuffs
        buff.concat(localBuffList.imagWeakCritDamageIncrease)
        return []
    }
    //Dracore Libre
    skillPressed(context: Context, currentCharacterIndex: ValidTarget): void {
        this.inTurnContext.DracoreLibreCount ++
    }
    ultimatePressed(context: Context, currentCharacterIndex: ValidTarget): void | Multipliers[] {
        throw new Error("Method not implemented.");
    }
}   