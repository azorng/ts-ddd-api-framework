import { IRepository } from '~/domain/IRepository';

export class FakeRepositoryBase<Model, Entity> implements IRepository<Model, Entity> {

    entities: Entity[]

    constructor(private entity: any, entities?: Entity[]) {
        this.entities = entities || []
    }

    async saveAll(models: Model[]): Promise<Entity[]> {
        const entities = models.map(model => new this.entity(model))
        this.entities.concat(entities)
        return this.entities
    }

    async save(user: Model): Promise<Entity> {
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