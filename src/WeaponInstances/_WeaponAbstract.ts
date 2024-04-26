import { WeaponInterface, Buff, OnEnemyDeBuff } from "../LocalInterfaces";

export default abstract class Weapon implements WeaponInterface{
    holderPath:path
    name:string;
    path:path;
    effectName:string;
    level:number;
    promotion:number;
    rankLevel: number;
    constructor(holderPath:path,name:string, path:path, effectName:string, level: number, promotion: number, rankLevel: number) {
        this.holderPath=holderPath
        this.name = name
        this.path = path
        this.level = level;
        this.promotion = promotion;
        this.rankLevel = rankLevel;
        this.effectName = effectName
    }
    abstract getInBattleEffect(): Buff | OnEnemyDeBuff | (Buff | OnEnemyDeBuff)[];;
    
    isEffective():boolean {
        return this.holderPath === this.path;
    }
}
