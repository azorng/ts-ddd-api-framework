import { Exception } from '~/domain/exceptions/Exception'
import { _ } from '~/lib'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export class DuplicateEntryException<Entity> extends Exception {
    property: string

    constructor(entity: Entity, duplicatedValue: string) {
        super(ExceptionCode.DUPLICATE_ENTRY)
        const property = _.propName(entity, duplicatedValue)
        this.property = property
    }
}
