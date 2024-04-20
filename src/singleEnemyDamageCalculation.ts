import { Stats } from "./ReqJSONInterfaces";
import { skill_Coef_Aggregate, Buff } from "./LocalInterfaces";
import { hostileUnit } from "./scenarioSetting";
class Multipliers{
    stats: Record<statsMultiplierDependentStats,number>;
    aggregateCoef:skill_Coef_Aggregate;
    //
    critDamage:number
    critRate:number
    critMultiplier:number

    boostMultiplier:number
    vulnerabilityMultiplier:number
    defMultiplier:number
    resMultiplier:number
    toughnessMultiplier:number
    dynamicProperties: Record<string, number> = {};

    //Standard way of constructing multiplier from 
    constructor(level:number, element:element, stats:Stats, aggregateCoef:skill_Coef_Aggregate, buffs:Buff[],  hostileUnit:hostileUnit){
        const stats_local = getStatsAfterBuff(stats, buffs)
        const depdentStats:Record<statsMultiplierDependentStats,number>={
            "ATK":stats.attackFinal,
            "DEF":stats.attackFinal,
            "HP":stats.attackFinal,
        }

        const debuffs = hostileUnit.debuffs
        const enemy = hostileUnit.unit

        this.stats = depdentStats
        this.aggregateCoef = aggregateCoef;
        
        this.critDamage =  stats_local.criticalDamage
        this.critRate = stats_local.criticalChance
        this.critMultiplier = 1+Math.min(this.critRate,1)*this.critDamage
        

        this.boostMultiplier = buffs.map(buff=>buff.effect.boostMultiplierIncrease).reduce((acc, value) => acc + value, 0) + 1 + getElementDamage(element, stats_local);

        this.vulnerabilityMultiplier = debuffs.map(buff => buff.effect.vulnerabilityMultiplierIncrease).reduce((acc, value) => acc + value, 0)+1;

        const defReduction = debuffs.map(buff => buff.effect.defReduction).reduce((acc, value) => acc + value, 0)
        const defReduction2 = buffs.map(buff => buff.effect.defReduction).reduce((acc, value) => acc + value, 0)
        this.defMultiplier = (level+20)/((enemy.level+20)*(1-defReduction-defReduction2) + level + 20)

        //character penetration
        const resMultiplierIncrease1 =  buffs.map(buff=>buff.effect.resMultiplierIncrease).reduce((acc, value) => acc + value, 0)
        //enemy res reduction
        const resMultiplierIncrease2 = debuffs.map(buff=>buff.effect.resMultiplierIncrease).reduce((acc, value) => acc + value, 0)
        
        this.resMultiplier = resMultiplierIncrease1+resMultiplierIncrease2+1;
        //for some character ignore toughness, set 
        this.toughnessMultiplier = 0.9+debuffs.map(buff=>buff.effect.toughnessMultiplierIncrease).reduce((acc, value) => acc + value, 0)
    }

    public getStraightDamageWithFinalStats():number {
        let baseMultiplier = 0
        for(const coef of this.aggregateCoef.CoefAggregate){
            if(coef.dependentStat === "ATK"){
                baseMultiplier += coef.value**this.stats.ATK
            }
            if(coef.dependentStat === "DEF"){
                baseMultiplier += coef.value*this.stats.DEF
            }
            if(coef.dependentStat === "HP"){
                baseMultiplier += coef.value*this.stats.HP
            }
        }
        return baseMultiplier * this.critMultiplier*this.boostMultiplier*this.defMultiplier*this.resMultiplier*this.vulnerabilityMultiplier*this.toughnessMultiplier
    }

    public getFlatMultipliers(): FlatMultipliersInterface {
        const basevalueMultipliers:baseValueMultiplierInterface[] = []
        for(const coef of this.aggregateCoef.CoefAggregate){
            const baseValueMultiplier:baseValueMultiplierInterface = {
                coef: coef.value,
                statValue: this.stats[coef.dependentStat],
                type: coef.dependentStat
            }
            basevalueMultipliers.push(baseValueMultiplier)
        }
        return {
            baseValueMultiplier:basevalueMultipliers,
            critMultiplier: this.critMultiplier,
            boostMultiplier: this.boostMultiplier,
            vulnerabilityMultiplier: this.vulnerabilityMultiplier,
            defMultiplier: this.defMultiplier,
            resMultiplier: this.resMultiplier,
            toughnessMultiplier: this.toughnessMultiplier,
            // Spread any dynamic properties that have been added
            ...this.dynamicProperties,
        };
    }

    setProperty(key: string, value: number): void {
        this.dynamicProperties[key] = value;
    }

    getProperty(key: string): number | undefined {
        return this.dynamicProperties[key];
    }
}


function getElementDamage(element:element, stats:Stats){
    switch (element){
        case "elec":
            return stats.elecAddHurt;
        case "imaginary":
            return stats.imaginaryAddHurt;
        case "wind":
            return stats.windAddHurt;
        case "fire":
            return stats.fireAddHurt;
        case "ice":
            return stats.fireAddHurt;
        case "quantum":
            return stats.quantumAddHurt;
        case "physical":
            return stats.physicalAddHurt
    }
}
/*
function getFinalATK(stats:Stats, buffs:Buff[]):number{
    let outputATK = stats.attackFinal
    for(const buff of buffs){
        outputATK += buff.statsBoost.attack
        outputATK += buff.statsBoost.attackPercentage*stats.attackBase
    }
    return outputATK
}


function getFinalDEF(stats:Stats, buffs:Buff[]):number{
    let outputDEF = stats.defenseFinal
    for(const buff of buffs){
        outputDEF += buff.statsBoost.defense
        outputDEF += buff.statsBoost.defensePercentage*stats.defenseBase
    }
    return outputDEF
}

function getFinalHP(stats:Stats, buffs:Buff[]):number{
    let outputHP = stats.hpFinal
    for(const buff of buffs){
        outputHP += buff.statsBoost.hp
        outputHP += buff.statsBoost.hpPercentage*stats.hpBase
    }
    return outputHP
}

function getFinalCriticalDamage(stats:Stats, buffs:Buff[]){
    let output = stats.criticalDamage
    for(const buff of buffs){
        output += buff.statsBoost.criticalDamage
    }
    return output
}

function getFinalCriticalRate(stats:Stats, buffs:Buff[]){
    let output = stats.criticalChance
    for(const buff of buffs){
        output += buff.statsBoost.criticalChance
    }
    return output
}*/

function getStatsAfterBuff(stats:Stats, buffs:Buff[]):Stats{
    const stats_copy:Stats = JSON.parse(JSON.stringify(stats))
    for(const buff of buffs){
        stats_copy.attackFinal += buff.statsBoost.attack
        stats_copy.attackFinal += buff.statsBoost.attackPercentage*stats.attackBase

        stats_copy.defenseFinal += buff.statsBoost.defense
        stats_copy.defenseFinal += buff.statsBoost.defensePercentage*stats.defenseBase

        stats_copy.hpFinal += buff.statsBoost.hp
        stats_copy.hpFinal += buff.statsBoost.hpPercentage*stats.hpBase

        stats_copy.speedFinal += buff.statsBoost.speed
        stats_copy.speedFinal += buff.statsBoost.speedPercentage

        stats_copy.criticalChance += buff.statsBoost.criticalChance
        stats_copy.criticalDamage += buff.statsBoost.criticalDamage

        stats_copy.healRatio += buff.statsBoost.healRatio
        stats_copy.stanceBreakRatio += buff.statsBoost.stanceBreakRatio
        stats_copy.statusResistance += buff.statsBoost.statusResistance
        stats_copy.statusProbability += buff.statsBoost.statusProbability
        stats_copy.spRatio += buff.statsBoost.spRatio

        stats_copy.elecAddHurt += buff.statsBoost.elecAddHurt
        stats_copy.fireAddHurt += buff.statsBoost.fireAddHurt
        stats_copy.iceAddHurt += buff.statsBoost.iceAddHurt
        stats_copy.imaginaryAddHurt += buff.statsBoost.imaginaryAddHurt
        stats_copy.windAddHurt += buff.statsBoost.windAddHurt
        stats_copy.physicalAddHurt += buff.statsBoost.physicalAddHurt
        stats_copy.quantumAddHurt += buff.statsBoost.quantumAddHurt
    }
    return stats
}
export {Multipliers}