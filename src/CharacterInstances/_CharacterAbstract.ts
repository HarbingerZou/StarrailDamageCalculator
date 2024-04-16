//expects TBasic, TSkill... to be coefficients
interface LocalContext{
    localBuffs:Buff[]
}
interface HasLocalContext{
    localContext:LocalContext
}
interface InTurnContext{

}
abstract class Character<TBasic extends skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
TSkill extends skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
TUltimate extends skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
TTalent extends skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]> implements CharacterInterface<TBasic,TSkill,TUltimate,TTalent >{
    name: string;
    path: path;
    element: element;
    level:number;
    basic_level: number;
    skill_level: number;
    ultimate_level: number;
    talent_level: number;

    //use ang instead of number for multiple value store
    //Example Dan Heng
    basic_data: TBasic
    skill_data: TSkill;
    ultimate_data: TUltimate;
    talent_data: TTalent;

    trace1: boolean;
    trace2: boolean;
    trace3: boolean;

    eidolon: number;
    stats:Stats
    constructor(name:string, eidolon:number,  path:path, element:element, level:number,
            basic_level:number, skill_level:number, ultimdate_level:number, talent_level:number,
            trace1:boolean, trace2:boolean, trace3:boolean,
            basic_data: TBasic, skill_data: TSkill, ultimate_data: TUltimate, talent_data: TTalent,
            stats:Stats
           ){
        const talentSkillCoefficient = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.625, 1.75, 1.875, 2, 2.1, 2.2]
        const ultimateCoefficient = [1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9, 2, 2.08, 2.16]
        const level7Coefficient = [0.5,0.6,0.7,0.8,0.9,1,1.1];

        this.name = name;
        this.eidolon = eidolon;
        this.path = path;
        this.element = element;
        this.level = level;
        this.basic_level = basic_level;
        this.skill_level = skill_level;
        this.ultimate_level = ultimdate_level;
        this.talent_level = talent_level;
        
        this.trace1 = trace1;
        this.trace2 = trace2;
        this.trace3 = trace3

        this.basic_data = basic_data
        this.skill_data = skill_data
        this.ultimate_data = ultimate_data
        this.talent_data = talent_data
        this.stats = stats
        }
        
    //add directly onto the BuffList
    //instead of return a buff or bufflist because some modification to local context is necessary
    addPassiveSkill(context:Context){
        throw new Error("Method not implemented.");
    }
    addTraces(context:Context){
        throw new Error("Method not implemented.");
    }
    addEidolons(context:Context){
        throw new Error("Method not implemented.");
    }
    //add the effect of passive, eidolon. etc
    addEffect(context: Context): void {
        this.addEidolons(context)
        this.addTraces(context)
        this.addPassiveSkill(context)
    }

    //get the constructed multipliers for each character
    //or ignore the value if it doesn't return any value
    abstract basicAttackPressed(context: Context, currentCharacterIndex:ValidTarget):Multipliers[]|void
    abstract skillPressed(context: Context, currentCharacterIndex:ValidTarget):Multipliers[]|void
    abstract ultimatePressed(context: Context, currentCharacterIndex:ValidTarget):Multipliers[]|void
}

export  {LocalContext, Character, HasLocalContext, InTurnContext}


interface getDamageBuffInfo{
    getDisplayData1(context: Context, currentCharacterIndex:ValidTarget): FlatMultipliersInterface[]|undefined
    getDisplayData2(context: Context, currentCharacterIndex:ValidTarget): FlatMultipliersInterface[]|undefined
    getDisplayData3(context: Context, currentCharacterIndex:ValidTarget): FlatMultipliersInterface[]|undefined
}