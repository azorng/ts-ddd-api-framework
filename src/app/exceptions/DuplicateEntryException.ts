import { Exception } from '~/infra/exceptions/Exception'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { _ } from '~/lib'

export class DuplicateEntryException<Entity> extends Exception {
    property: string

    constructor(entity: Entity, duplicatedValue: string) {
        super(ExceptionCode.DUPLICATE_ENTRY)
        const property = _.propName(entity, duplicatedValue)
        this.property = property
    }
}
