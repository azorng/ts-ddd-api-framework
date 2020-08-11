import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { _ } from '~/lib'
import { EntityValidationErrors, EntityValidationError } from '~/domain/exceptions/EntityValidationError'

export class EntityValidationException extends Exception {
    validationErrors: EntityValidationError[]

    constructor(validationErrors: EntityValidationErrors) {
        super(ExceptionCode.VALIDATION_FAILED)

        this.validationErrors = validationErrors.errors
    }
}
