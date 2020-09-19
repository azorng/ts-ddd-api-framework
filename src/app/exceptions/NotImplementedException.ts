import { Exception } from '~/infra/exceptions/Exception'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'

export class NotImplementedException extends Exception {
    constructor() {
        super(ExceptionCode.NOT_IMPLEMENTED)
    }
}
