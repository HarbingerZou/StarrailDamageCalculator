import { skill_Coef_all_level, CharacterInterface, EnemyInstances, OnEnemyDeBuff, Buff } from "./LocalInterfaces"
interface friendlyUnit{
    character:CharacterInterface<
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[],
        skill_Coef_all_level | skill_Coef_all_level[]>
    buffs:Buff[]
}
interface hostileUnit{
    unit:EnemyInstances
    debuffs:OnEnemyDeBuff[]
}
class hostileUnit implements hostileUnit{
    unit: EnemyInstances;
    debuffs: OnEnemyDeBuff[];
    constructor(){
        this.unit = new EnemyInstances()
        this.debuffs = []
    }
}
interface Team{
    units:friendlyUnit[]
}
class Scene{
    //maxium 5
    enemy:hostileUnit[]
    team:Team
    constructor(enemy = [
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit(),
        new hostileUnit()
    ]){
        this.enemy = enemy
        this.team = {units:[]}
    }

}   

interface Context{
    enemy:hostileUnit[]
    team:Team
}

export {hostileUnit, friendlyUnit, Team, Scene, Context}