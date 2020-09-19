import { Exception } from '~/infra/exceptions/Exception'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { _ } from '~/lib'
import { EntityValidationErrors, EntityValidationError } from '~/infra/exceptions/EntityValidationError'

export class EntityValidationException extends Exception {
    validationErrors: EntityValidationError[]

    constructor(validationErrors: EntityValidationErrors) {
        super(ExceptionCode.VALIDATION_FAILED)
        this.validationErrors = validationErrors.errors
    }
}