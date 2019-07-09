import { Exception } from '~/domain/exceptions/Exception';
import { _ } from '~/lib';
import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';

export class DuplicateEntryException<Model> extends Exception {
    duplicate: string[]

    constructor(model: Model, duplicatedValue: string) {
        super(ExceptionCode.DUP_ENTRY)
        const field = _.propName(model, duplicatedValue)
        this.duplicate = [field]
    }
}