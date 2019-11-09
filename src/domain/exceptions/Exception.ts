import { ExceptionCodes } from '~/domain/exceptions/ExceptionMessages';

export class Exception {
    name: string
    message: string

    constructor(exception: ExceptionCodes) {
        this.name = ExceptionCodes[exception]
    }
}