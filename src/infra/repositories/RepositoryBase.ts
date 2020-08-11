import { getRepository, Repository as ormRepo, EntityTarget } from 'typeorm'

export class RepositoryBase<Entity> {
    protected repository: ormRepo<Entity>

    constructor(entity: EntityTarget<Entity>) {
        this.repository = getRepository(entity)
    }

    async saveAll(entities: Entity[]): Promise<Entity[]> {
        return this.repository.save(entities)
    }

    async save(entity: Entity): Promise<Entity> {
        return this.repository.save(entity)
    }

    async delete(entities: Entity[]): Promise<void> {
        this.repository.delete(entities)
    }

    async find(conditions: object): Promise<Entity | undefined> {
        return this.repository.findOne(conditions)
    }

    async findAll(conditions?: object): Promise<Entity[]> {
        if (conditions) {
            return this.repository.find(conditions)
        } else {
            return this.repository.find()
        }
    }
}
