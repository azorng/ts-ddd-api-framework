import { getRepository, Repository } from 'typeorm'
import { IRepository } from '~/infra/repositories/IRepository'

export class RepositoryBase<Entity> implements IRepository<Entity> {
    repository: Repository<Entity>
    constructor(entity: any) {
        this.repository = getRepository(entity)
    }

    async saveAll(entities: Entity[]): Promise<Entity[]> {
        return this.repository.save(entities)
    }

    async save(entity: Entity): Promise<Entity> {
        return this.repository.save(entity)
    }

    async fetch(conditions: object): Promise<Entity | undefined> {
        return this.repository.findOne(conditions)
    }

    async fetchAll(conditions?: object): Promise<Entity[]> {
        if (conditions) {
            return this.repository.find(conditions)
        } else {
            return this.repository.find()
        }
    }
}
