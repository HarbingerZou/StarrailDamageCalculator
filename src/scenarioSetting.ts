import { skill_Coef_all_level, CharacterInterface, EnemyInstances, OnEnemyDeBuff, Buff, skill_Coef_Aggregate, ValidTarget } from "./LocalInterfaces"
interface friendlyUnit{
    character:CharacterInterface<
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[]>
    buffs:Buff[]
}
interface hostileUnit{
    unit:EnemyInstances
    debuffs:OnEnemyDeBuff[]
}
class hostileUnit implements hostileUnit{
    unit: EnemyInstances;
    debuffs: OnEnemyDeBuff[];
    constructor(){
        this.unit = new EnemyInstances()
        this.debuffs = []
    }
}
interface Team{
    units:friendlyUnit[]
}
class Scene{
    //maxium 5
    enemy:hostileUnit[]
    team:Team
    constructor(enemy = [
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit()
    ]){
        this.enemy = enemy
        this.team = {units:[]}
    }

}   

interface Context{
    enemy:hostileUnit[]
    team:Team
}

export {hostileUnit, friendlyUnit, Team, Scene, Context}

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


function getAllBuffOnCharacter(context:Context, currentCharacterIndex:ValidTarget):Buff[]{
    const selfOnSelfBuffList:Buff[] = context.team.units[currentCharacterIndex].buffs.filter(
        buff=> buff.target === 0 || (Array.isArray(buff.target) && buff.target.includes(currentCharacterIndex)))
    
    const teammates:friendlyUnit[] = context.team.units.filter((unit,i)=> i !== currentCharacterIndex)
   
    const teammateOnSelfBuffList :Buff[]= teammates.map(teammate =>  teammate.buffs.filter(
        buff=>(Array.isArray(buff.target) && buff.target.includes(currentCharacterIndex))
    )).reduce((acc, curr) => acc.concat(curr), [])

    return selfOnSelfBuffList.concat(teammateOnSelfBuffList)
}

export {getBasicCoefficient, getSkillTalentCoef, getUltimateCoefficient}
export {getBasicCoefficientDependentStats,getSkillTalentCoefDependentStats, getUltimateCoefficientDependentStats}
export {getAllBuffOnCharacter}