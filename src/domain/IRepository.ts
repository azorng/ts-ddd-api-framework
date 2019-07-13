export interface IRepository<Model, Entity> {
    saveAll(entities: Model[]): Promise<Entity[]>
    save(entity: Model): Promise<Entity>
    fetch(conditions: object): Promise<Entity | undefined>
    fetchAll(conditions?: object): Promise<Entity[]>
}