import {RawCharacter, Stats} from "./ReqJSONInterfaces"
//notes for each skill
import {Character} from "./CharacterInstances/_CharacterAbstract"
import { skill_Coef_all_level } from "./LocalInterfaces";
import {Dan_Heng_IL} from "./CharacterInstances/Destruction/Dan_Heng_IL"

function getCharacter(characterInfo:RawCharacter, stats:Stats) : Character<skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]> | undefined{
    if(characterInfo.id === 1213){
        return new Dan_Heng_IL(characterInfo.level,characterInfo.rank ,characterInfo.basic_level, characterInfo.skill_level, characterInfo.ultimate_level, characterInfo.talent_level,
            characterInfo.trace1,characterInfo.trace2,characterInfo.trace3, stats);

    }

}

export {getCharacter};
