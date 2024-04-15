class Multipliers{
    stats: Record<statsMultiplierDepdentStats,number>;
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
    constructor(level:number, element:element, stats:Stats, aggregateCoef:skill_Coef_Aggregate, buffs:Buff[],  enemy:EnemyInstances, debuffs:OnEnemyDeBuff[]){
        const depdentStats:Record<statsMultiplierDepdentStats,number>={
            "ATK":getFinalATK(stats,buffs),
            "DEF":getFinalDEF(stats,buffs),
            "HP":getFinalHP(stats,buffs)
        }
        this.stats = depdentStats
        this.aggregateCoef = aggregateCoef;

        this.critDamage = getFinalCriticalDamage(stats,buffs)
        this.critRate = getFinalCriticalRate(stats,buffs)
        this.critMultiplier = 1+Math.min(this.critRate,1)*this.critDamage


        this.boostMultiplier = buffs.map(buff=>buff.effect.boostMultiplierIncrease).reduce((acc, value) => acc + value, 0) + 1 + getElementDamage(element, stats);

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
                baseMultiplier += coef.value*this.stats.ATK
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
}
