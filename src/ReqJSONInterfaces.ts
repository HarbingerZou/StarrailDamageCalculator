interface RawWeapon{
    id:number;
    level:number;
    promotion:number;
    rankLevel: number;
}

interface RawCharacter {
    id: number;
    level:number;
    rank:number;
    basic_level: number;
    skill_level: number;
    ultimate_level: number;
    talent_level:number
    trace1: boolean;
    trace2:boolean;
    trace3:boolean;
}

interface RawRelic{
    level:number;
    type:relicType;
    setID:number
    setName:string;
    rarity:number;
    mainAffix:AffixInterface;
    subAffix:subAffixInterface[];
}

interface Stats {
    hpBase: number;
    hpFinal: number;
    attackBase: number;
    attackFinal: number;
    defenseBase: number;
    defenseFinal: number;
    speedBase: number;
    speedFinal: number;
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

interface AffixInterface{
    type:MainStatType,
    value:number,
}

interface subAffixInterface{
    type:SubStatType,
    count:number
    value:number,
}
export {RawCharacter, RawRelic, RawWeapon, Stats, subAffixInterface}