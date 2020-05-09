export interface IRepository<Entity> {
    saveAll(entities: Entity[]): Promise<Entity[]>
    save(entity: Entity): Promise<Entity>
    find(conditions: object): Promise<Entity | undefined>
    findAll(conditions?: object): Promise<Entity[]>
}
