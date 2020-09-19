import {
    ExceptionCode,
    ExceptionMessage,
    ExceptionStatusCode
} from '~/app/exceptions/ExceptionCodes'

export class Exception {
    name: string
    message: string
    details?: string
    #exceptionCode: ExceptionCode

    constructor(exception: ExceptionCode) {
        this.name = ExceptionCode[exception]
        this.message = ExceptionMessage[exception]
        this.#exceptionCode = exception
    }

    get statusCode() {
        return ExceptionStatusCode[this.#exceptionCode] || 400
    }
}
