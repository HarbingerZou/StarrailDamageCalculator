//should store the skill data of each character

interface RelicInterface{
    level:number;
    type:relicType;
    setID:number
    setName:string;
    rarity:number;
    mainAffix:AffixInterface;
    subAffix:subAffixInterface[];
}
interface WeaponInterface {
    name:string;
    path:path;
    level:number;
    promotion:number;
    rankLevel: number;
}


interface skill_Coef{
    dependentStat:statsMultiplierDepdentStats
    value:number
}
interface skill_Coef_Aggregate{
    //one skill coef can be attributed by multiple coef, blade hp and attack
    CoefAggregate:skill_Coef[]
}
interface skill_Coef_Full{
    //blast and aoe deal a list of damage
    coefOnEnemy:skill_Coef_Aggregate[]
}

type DataShape<T> = T extends skill_Coef_Full ? skill_Coef_Full[] : T extends skill_Coef_Full[] ? skill_Coef_Full[][] : never;

interface CharacterInterface <TBasic extends skill_Coef_Full | skill_Coef_Full[],
TSkill extends skill_Coef_Full | skill_Coef_Full[],
TUltimate extends skill_Coef_Full | skill_Coef_Full[],
TTalent extends skill_Coef_Full | skill_Coef_Full[]>{
    name: string;
    path: path;
    element: Element;
    basic_data: DataShape<TBasic>;
    skill_data: DataShape<TSkill>;
    ultimate_data: DataShape<TUltimate>;
    talent_data: DataShape<TTalent>;
}

interface CharacterWithStatInterface<TBasic extends skill_Coef_Full | skill_Coef_Full[],
TSkill extends skill_Coef_Full | skill_Coef_Full[],
TUltimate extends skill_Coef_Full | skill_Coef_Full[],
TTalent extends skill_Coef_Full | skill_Coef_Full[]> extends CharacterInterface<TBasic, TSkill, TUltimate, TTalent> {
    level:number;
    basic_level: number;
    skill_level: number;
    ultimate_level: number;
    talent_level: number;
}



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

interface SpecialEffectInterface{
    boostMultiplierIncrease:number
    //penetration
    resMultiplierIncrease:number
    shieldAbsorb:number
}

interface OnEnemySpecialEffectInterface{
    vulnerabilityMultiplierIncrease:number
    defReduction:number
    resMultiplierIncrease:number
    toughnessMultiplierIncrease:number
}

class SpecialEffects implements SpecialEffectInterface{
    boostMultiplierIncrease:number
    resMultiplierIncrease:number
    defReduction:number
    shieldAbsorb:number
    constructor(boostMultiplierIncrease:number = 0, resMultiplierIncrease:number = 0, shieldAbsorb = 0, defReduction = 0){
        this.boostMultiplierIncrease = boostMultiplierIncrease;
        this.resMultiplierIncrease = resMultiplierIncrease;
        this.defReduction = defReduction
        this.shieldAbsorb = shieldAbsorb
    }
}

class OnEnemySpecialEffect implements OnEnemySpecialEffectInterface{
    vulnerabilityMultiplierIncrease:number
    defReduction:number
    resMultiplierIncrease:number
    toughnessMultiplierIncrease:number
    constructor(vulnerabilityMultiplierIncrease:number =0, defReduction:number =0, resMultiplierIncrease:number=0, toughnessMultiplierIncrease:number=0){
        this.vulnerabilityMultiplierIncrease = vulnerabilityMultiplierIncrease
        this.defReduction = defReduction
        this.resMultiplierIncrease = resMultiplierIncrease
        this.toughnessMultiplierIncrease = toughnessMultiplierIncrease
    }
}

interface StatsBoostInterface{
    hp: number; //some teammate effect increase teammates stats by a a percentage of their base stats (Tingyun)
    hpPercentage:number //some team effect increase teamnates stats by a percentage of their teammates' base stats (some weapons)
    attack: number;
    attackPercentage:number; //
    defense: number;
    defensePercentage:number
    speed: number;
    speedPercentage:number
    criticalChance: number;
    criticalDamage: number;
    stanceBreakRatio: number;
    healRatio: number;
    spRatio: number;
    statusProbability: number;
    statusResistance: number;
    physicalAddHurt: number;
    fireAddHurt: number;
    iceAddHurt: number;
    elecAddHurt: number;
    windAddHurt: number;
    quantumAddHurt: number;
    imaginaryAddHurt: number;
}
class StatsBoost implements StatsBoostInterface{
    hp: number; //some teammate effect increase teammates stats by a a percentage of their base stats (Tingyun)
    hpPercentage:number //some team effect increase teamnates stats by a percentage of their teammates' base stats (some weapons)
    attack: number;
    attackPercentage:number; //
    defense: number;
    defensePercentage:number
    speed: number;
    speedPercentage:number
    criticalChance: number;
    criticalDamage: number;
    stanceBreakRatio: number;
    healRatio: number;
    spRatio: number;
    statusProbability: number;
    statusResistance: number;
    physicalAddHurt: number;
    fireAddHurt: number;
    iceAddHurt: number;
    elecAddHurt: number;
    windAddHurt: number;
    quantumAddHurt: number;
    imaginaryAddHurt: number;

    constructor() {
        this.hp = 0;
        this.hpPercentage=0
        this.attack = 0;
        this.attackPercentage = 0
        this.defense = 0;
        this.defensePercentage = 0;
        this.speed = 0;
        this.speedPercentage = 0
        this.criticalChance = 0;
        this.criticalDamage = 0;
        this.stanceBreakRatio = 0;
        this.healRatio = 0;
        this.spRatio = 0;
        this.statusProbability = 0;
        this.statusResistance = 0;
        this.physicalAddHurt = 0;
        this.fireAddHurt = 0;
        this.iceAddHurt = 0;
        this.elecAddHurt = 0;
        this.windAddHurt = 0;
        this.quantumAddHurt = 0;
        this.imaginaryAddHurt = 0;
    }
}

//This represents a single buff under the buff list veiw in game
//Therefore it can contains statsBoost and effecr at the same time
type ValidTarget = 0 | 1 | 2 | 3;
type ValidTargets = ValidTarget | ValidTarget[];
class Buff {
    //target = 0, this effect is for character itself
    //target = [0,1,2,3]...., This effect is for selected memeber in the team
    target: ValidTargets;
    effectiveField: damageType[];
    statsBoost: StatsBoost;
    effect: SpecialEffects;
    notes: string[];

    constructor({
        target = 0,
        effectiveField = ["basic attack", "skill", "ultimate", "follow up"],
        statsBoost = new StatsBoost(),
        effect = new SpecialEffects(),
        notes = []
    }: {
        target?: ValidTargets;
        effectiveField?: damageType[];
        statsBoost?: StatsBoost;
        effect?: SpecialEffects;
        notes?: string[];
    } = {}) {
        this.target = target;
        this.effectiveField = effectiveField;
        this.statsBoost = statsBoost;
        this.effect = effect;
        this.notes = notes;
    }
}

class OnEnemyDeBuff{
    effect:OnEnemySpecialEffect
    notes:string[]
    constructor({effect = new OnEnemySpecialEffect(), notes=[]}:{effect?:OnEnemySpecialEffect, notes?:string[]}={}){
        this.effect = effect
        this.notes = notes
    }
}

class EnemyInstances{
    level:number
    toughness:number
    baseRes:number
    constructor(level:number = 80, toughness:number = 0.9, baseRes:number = 1){
        this.level = level
        this.toughness = toughness
        this.baseRes = baseRes
    }

}
interface baseValueMultiplierInterface{
    coef:number
    statValue:number
    type:statsMultiplierDepdentStats
}

