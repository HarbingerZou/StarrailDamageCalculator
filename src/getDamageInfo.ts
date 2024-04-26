import { getCharacter } from "./CharacterFacory";
import { Character } from "./CharacterInstances/_CharacterAbstract";
import { Buff, OnEnemyDeBuff, skill_Coef_all_level } from "./LocalInterfaces";
import { getRelicSetList } from "./RelicFactory";
import RelicSet from "./RelicInstances/_RelicSetAbstract";
import { RawCharacter } from "./ReqJSONInterfaces";
import { AggregateInfoInterface, InfoInterface } from "./ResJsonInterfaces";
import { getWeapon } from "./WeaponFactory";
import Weapon from "./WeaponInstances/_WeaponAbstract";
import { Context, Scene } from "./scenarioSetting";

function getDamageInfo(rawCharacter:RawCharacter):AggregateInfoInterface|undefined{
    //console.log(rawCharacter)
    const character:Character<skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][],
        skill_Coef_all_level | skill_Coef_all_level[] | number[]| number[][]>|undefined = getCharacter(rawCharacter, rawCharacter.combatValues);
    if(!character){
        return undefined
    }
    const scene:Scene = new Scene(character)
    const context:Context = scene
    const weapon:Weapon|undefined = getWeapon(rawCharacter.weapon, character.path);
    const relicSets:RelicSet[] = getRelicSetList(rawCharacter.relics);
    if(!weapon){
        return undefined
    }
    if(!relicSets){
        return undefined
    }

    const weaponBuff:Buff|OnEnemyDeBuff|(Buff|OnEnemyDeBuff)[] = weapon.getInBattleEffect()
    if(weaponBuff instanceof Buff){
        context.friendlyUnit.buffs.push(weaponBuff)
    }else if(weaponBuff instanceof OnEnemyDeBuff){
        context.enemy.debuffs.push(weaponBuff)
    }else{
        for(const singleBuff of weaponBuff){
            if(singleBuff instanceof Buff){
                context.friendlyUnit.buffs.push(singleBuff)
            }else{
                context.enemy.debuffs.push(singleBuff)
            }
        }
    }


    return undefined
}

export {getDamageInfo}