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
    targetCount:number
}
 
interface InfoInterface{
    name:string
    value:number
    notes:string[]
    multipliers:FlatMultipliersInterface
}
class Info implements InfoInterface{
    name:string;
    value:number;
    //for effect
    notes:string[];
    //multiplier
    multipliers:FlatMultipliersInterface;
    constructor(name:string, value:number, notes:string[], multipliers:FlatMultipliersInterface){
        this.name = name;
        this.value = value;
        this.notes = notes;
        this.multipliers = multipliers;
    }
}
interface AggregateInfoInterface{
    infos:Info[]

}
export{FlatMultipliersInterface, InfoInterface, baseValueMultiplierInterface, AggregateInfoInterface}