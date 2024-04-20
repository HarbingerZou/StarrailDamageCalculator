import { RawWeapon } from "./ReqJSONInterfaces";
import brighter_than_the_sun from "./WeaponInstances/Destruction/brighter_than_the_sun";
import Weapon from "./WeaponInstances/_WeaponAbstract";
import Along_the_Passing_Shore from "./WeaponInstances/Nihility/Along_the_Passing_Shore";
import I_Shall_Be_My_Own_Sword from "./WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword";


function getWeapon(weapon:RawWeapon|undefined, holderPath:path):Weapon | undefined{
    if(weapon === undefined){
        return undefined
    }
    
    if(weapon.id === 23015){
        return new brighter_than_the_sun(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);
    }
    
    if(weapon.id === 23024){
        return new Along_the_Passing_Shore(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);
    }
    if(weapon.id === 23014){
        return new I_Shall_Be_My_Own_Sword(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);
    }
    return undefined;
}

export { getWeapon };
