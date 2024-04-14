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
class AllTeamEffect{
    //maxium 5
    enemy:hostileUnit[]
    team:friendlyUnit[]
    constructor(){
        this.enemy = []
        this.team = []
    }

}   