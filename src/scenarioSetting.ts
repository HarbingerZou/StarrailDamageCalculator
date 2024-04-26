import { skill_Coef_all_level, CharacterInterface, EnemyInstances, OnEnemyDeBuff, Buff, skill_Coef_Aggregate, ValidTarget } from "./LocalInterfaces"
interface FriendlyUnitInterface{
    character:CharacterInterface<
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]>
    buffs:Buff[]
}
class FriendlyUnit implements FriendlyUnitInterface{
    character: CharacterInterface<skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]>;
    buffs: Buff[];
    constructor(character:CharacterInterface<skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]>){
        this.character = character
        this.buffs = []
    }

}
interface hostileUnitInterface{
    unit:EnemyInstances
    debuffs:OnEnemyDeBuff[]
}
class hostileUnit implements hostileUnitInterface{
    unit: EnemyInstances;
    debuffs: OnEnemyDeBuff[];
    constructor(){
        this.unit = new EnemyInstances()
        this.debuffs = []
    }
}
class Scene{
    //maxium 5
    enemy:hostileUnit
    friendlyUnit:FriendlyUnitInterface
    constructor(character:CharacterInterface<
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]>,
        enemy = new hostileUnit()){
        this.enemy = enemy
        this.friendlyUnit = new FriendlyUnit(character)
    }

}   

interface Context{
    enemy:hostileUnit
    friendlyUnit:FriendlyUnitInterface
}

export {hostileUnit, FriendlyUnitInterface, Scene, Context}

function getSkillTalentCoef(multiplier:number){
    const talentSkillCoefficient = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.625, 1.75, 1.875, 2, 2.1, 2.2]
    return talentSkillCoefficient.map(val=>val*multiplier)
}
function getUltimateCoefficient(multiplier:number){
    const ultimateCoefficient = [1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9, 2, 2.08, 2.16]
    return ultimateCoefficient.map(val=>val*multiplier)
}
function getBasicCoefficient(multiplier:number){
    const basicCoefficient = [0.5,0.6,0.7,0.8,0.9,1,1.1];
    return basicCoefficient.map(val=>val*multiplier)
} 

function getSkillTalentCoefDependentStats(multipliers:Partial<Record<statsMultiplierDependentStats, number>>):skill_Coef_all_level{
    const fullMultipliers: Record<statsMultiplierDependentStats, number> = {
        ATK: multipliers.ATK ?? 0,
        DEF: multipliers.DEF ?? 0,
        HP: multipliers.HP ?? 0
    };
    
    function arrayMap(levelCoef:number){
        const aggregate_coef:skill_Coef_Aggregate = {CoefAggregate:[]}
        //ignore the 0 coefs becasue damage doesn't rely on them
        for(const stat in multipliers){
            const key = stat as statsMultiplierDependentStats;
            aggregate_coef.CoefAggregate.push({dependentStat:key, value:fullMultipliers[key] * levelCoef})
        }
        return aggregate_coef
    }
    const talentSkillCoefficient = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.625, 1.75, 1.875, 2, 2.1, 2.2]
    return {allLevelCoef:talentSkillCoefficient.map(arrayMap)}
}

function getUltimateCoefficientDependentStats(multipliers:Partial<Record<statsMultiplierDependentStats, number>>):skill_Coef_all_level{
    const fullMultipliers: Record<statsMultiplierDependentStats, number> = {
        ATK: multipliers.ATK ?? 0,
        DEF: multipliers.DEF ?? 0,
        HP: multipliers.HP ?? 0
    };
    
    function arrayMap(levelCoef:number){
        const aggregate_coef:skill_Coef_Aggregate = {CoefAggregate:[]}
        //ignore the 0 coefs becasue damage doesn't rely on them
        for(const stat in multipliers){
            const key = stat as statsMultiplierDependentStats;
            aggregate_coef.CoefAggregate.push({dependentStat:key, value:fullMultipliers[key] * levelCoef})
        }
        return aggregate_coef
    }

    const talentSkillCoefficient = [1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9, 2, 2.08, 2.16]
    return {allLevelCoef:talentSkillCoefficient.map(arrayMap)}
}

function getBasicCoefficientDependentStats(multipliers:Partial<Record<statsMultiplierDependentStats, number>>):skill_Coef_all_level{
     const fullMultipliers: Record<statsMultiplierDependentStats, number> = {
        ATK: multipliers.ATK ?? 0,
        DEF: multipliers.DEF ?? 0,
        HP: multipliers.HP ?? 0
    };
    
    function arrayMap(levelCoef:number){
        const aggregate_coef:skill_Coef_Aggregate = {CoefAggregate:[]}
        //ignore the 0 coefs becasue damage doesn't rely on them
        for(const stat in multipliers){
            const key = stat as statsMultiplierDependentStats;
            aggregate_coef.CoefAggregate.push({dependentStat:key, value:fullMultipliers[key] * levelCoef})
        }
        return aggregate_coef
    }
    const talentSkillCoefficient = [0.5,0.6,0.7,0.8,0.9,1,1.1];
    return {allLevelCoef:talentSkillCoefficient.map(arrayMap)}
}


function getAllBuffOnCharacter(context:Context):Buff[]{
    const buff:Buff[] = context.friendlyUnit.buffs
    return buff
}

export {getBasicCoefficient, getSkillTalentCoef, getUltimateCoefficient}
export {getBasicCoefficientDependentStats,getSkillTalentCoefDependentStats, getUltimateCoefficientDependentStats}
export {getAllBuffOnCharacter}