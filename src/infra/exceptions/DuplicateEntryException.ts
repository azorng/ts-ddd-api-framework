import { Exception } from '~/domain/Exception';
import { _ } from '~/lib';

export class DuplicateEntryException<Model> extends Exception {
    constructor(model: Model, duplicatedValue: string) {
        const field = _.propName(model, duplicatedValue)
        super({
            name: 'DUP_ENTRY',
            message: `${field} ${duplicatedValue} already exists`
        })
    }
}