import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { Exception } from '~/infra/exceptions/Exception'

export class RequiredFieldException extends Exception {
    constructor(field: string) {
        super(ExceptionCode.BAD_REQUEST)
        this.details = `The following field is required: ${field}`
    }
}
