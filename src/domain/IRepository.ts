export interface IRepository<Model, Entity> {
    saveAll(entities: Model[]): Promise<Entity[]>
    save(entity: Model): Promise<Entity>
    fetch(conditions: object): Promise<Entity>
    fetchAll(): Promise<Entity[]>
}