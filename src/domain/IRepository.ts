export interface IRepository<Entity, Model> {
    saveAll(entities: Entity[]): Promise<Model[]>
    save(entity: Entity): Promise<Model>
}