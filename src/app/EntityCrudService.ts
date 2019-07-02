import { IRepository } from '~/domain/IRepository';

export class EntityCrudService<Entity> {
    private repository: IRepository<Entity>

    constructor(repository: IRepository<Entity>) {
        this.repository = repository
    }

    async create(entities: Entity[]) {
        return this.repository.create(entities)
    }
}
