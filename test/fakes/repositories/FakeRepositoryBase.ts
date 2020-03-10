import { IRepository } from '~/infra/repositories/IRepository'

export class FakeRepositoryBase<Entity> implements IRepository<Entity> {
    entities: Entity[]

    constructor(entities?: Entity[]) {
        this.entities = entities || []
    }

    async saveAll(entities: Entity[]): Promise<Entity[]> {
        this.entities.concat(entities)
        return this.entities
    }

    async save(entity: Entity): Promise<Entity> {
        this.entities.push(entity)
        return entity
    }

    async fetch(conditions: any): Promise<Entity | undefined> {
        let matchedEntity = undefined

        if (conditions.hasOwnProperty('where')) conditions = conditions.where

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
