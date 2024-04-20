import { getCharacter } from "./CharacterFacory";
import { Character } from "./CharacterInstances/_CharacterAbstract";
import { getRelicSetList } from "./RelicFactory";
import RelicSet from "./RelicInstances/_RelicSetAbstract";
import { RawCharacter } from "./ReqJSONInterfaces";
import { getWeapon } from "./WeaponFactory";
import Weapon from "./WeaponInstances/_WeaponAbstract";

function getDamageInfo(rawCharacter:RawCharacter):InfoInterface[]{
    //console.log(rawCharacter)
    const character:Character<any|any[], any|any[], any|any[], any|any[]>|undefined = getCharacter(rawCharacter, rawCharacter.combatValues);
    if(!character){
        return[]
    }
    console.log(character)
    const weapon:Weapon|undefined = getWeapon(rawCharacter.weapon, character.path);
    console.log(weapon)
    const relicSets:RelicSet[] = getRelicSetList(rawCharacter.relics);
    console.log(relicSets)
    return []
}

export {getDamageInfo}