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
interface Team{
    units:friendlyUnit[]
}
class Scene{
    //maxium 5
    enemy:hostileUnit[]
    team:Team
    constructor(){
        this.enemy = []
        this.team = {units:[]}
    }

}   

interface Context{
    enemy:hostileUnit[]
    team:Team
}