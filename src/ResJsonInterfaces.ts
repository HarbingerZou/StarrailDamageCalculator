//Multiplier for an single enemy
interface baseValueMultiplierInterface{
    coef:number
    statValue:number
    type:statsMultiplierDependentStats
}

interface FlatMultipliersInterface{
    baseValueMultiplier:baseValueMultiplierInterface[]
    critMultiplier:number
    boostMultiplier:number
    vulnerabilityMultiplier:number
    defMultiplier:number
    resMultiplier:number
    toughnessMultiplier:number
}