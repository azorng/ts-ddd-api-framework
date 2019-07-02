import { IRepository } from '~/domain/IRepository';

export class EntityCrudService<Entity> {
    private repository: IRepository<Entity>

    constructor(repository: IRepository<Entity>) {
        this.repository = repository
    }

    async create(entity: Entity) {
        return this.repository.create(entity)
    }
}
