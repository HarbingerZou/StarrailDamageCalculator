interface friendlyUnit{
    character:CharacterInterface<
        skill_Coef_Full | skill_Coef_Full[],
        skill_Coef_Full | skill_Coef_Full[],
        skill_Coef_Full | skill_Coef_Full[],
        skill_Coef_Full | skill_Coef_Full[]>
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