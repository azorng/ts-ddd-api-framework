import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';

export class Exception {
    name: string
    message: string

    constructor(exception: ExceptionCode) {
        this.name = ExceptionCode[exception]
    }
}