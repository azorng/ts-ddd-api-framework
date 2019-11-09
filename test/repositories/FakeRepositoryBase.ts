import { IRepository } from '~/infra/repositories/IRepository';

export class FakeRepositoryBase<Entity> implements IRepository<Entity> {

    entities: Entity[]

    constructor(private entity: any, entities?: Entity[]) {
        this.entities = entities || []
    }

    async saveAll(entitiess: Entity[]): Promise<Entity[]> {
        const entities = entitiess.map(entity => new this.entity(entity))
        this.entities.concat(entities)
        return this.entities
    }

    async save(user: Entity): Promise<Entity> {
        const entity = new this.entity(user)
        this.entities.push(entity)
        return entity
    }

    async fetch(conditions: any): Promise<Entity | undefined> {
        let matchedEntity = undefined
        this.entities.forEach((entity: any) => {
            for (const conditionName in conditions) {
                if (entity.hasOwnProperty(conditionName)) {
                    const conditionValue = conditions[conditionName]
                    if (entity[conditionName] == conditionValue) {
                        matchedEntity = entity
                        return
                    }
                }
            }
        })

        return matchedEntity
    }

    async fetchAll(conditions?: any): Promise<Entity[]> {
        if (conditions) {
            let matchedEntities: Entity[] = []
            this.entities.forEach((entity: any) => {
                for (const conditionName in conditions) {
                    if (entity.hasOwnProperty(conditionName)) {
                        const conditionValue = conditions[conditionName]
                        if (entity[conditionName] == conditionValue) {
                            matchedEntities.push(entity)
                        }
                    }
                }
            })

            return matchedEntities
        } else {
            return this.entities
        }

    }
}