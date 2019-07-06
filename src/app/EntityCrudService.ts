import { IRepository } from '~/domain/IRepository';

export class EntityCrudService<Entity, Model> {
    constructor(private repository: IRepository<Entity, Model>) { }

    async saveAll(entities: Entity[]) {
        return this.repository.saveAll(entities)
    }

    async save(entity: Entity) {
        return this.repository.save(entity)
    }
}
