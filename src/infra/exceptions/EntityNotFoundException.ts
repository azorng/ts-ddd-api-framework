import { Exception } from '~/domain/Exception';

export class EntityNotFoundException extends Exception {
    constructor() {
        super({
            name: 'NO_ENT',
            message: `Entity not found.`
        })
    }
}