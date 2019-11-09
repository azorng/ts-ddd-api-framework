import { Exception } from '~/domain/exceptions/Exception';
import { _ } from '~/lib';
import { ExceptionCodes } from '~/domain/exceptions/ExceptionMessages';

export class DuplicateEntryException<Entity> extends Exception {
    duplicate: string[]

    constructor(entity: Entity, duplicatedValue: string) {
        super(ExceptionCodes.DUPLICATE_ENTRY)
        const field = _.propName(entity, duplicatedValue)
        this.duplicate = [field]
    }
}