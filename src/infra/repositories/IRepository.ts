export interface IRepository<Entity> {
    saveAll(entities: Entity[]): Promise<Entity[]>
    save(entity: Entity): Promise<Entity>
    fetch(conditions: object): Promise<Entity | undefined>
    fetchAll(conditions?: object): Promise<Entity[]>
}