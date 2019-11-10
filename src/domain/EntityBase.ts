import { validate } from 'class-validator'
import { EntityValidationErrors } from '~/domain/exceptions/EntityValidationError'
import { EntityValidationException } from '~/domain/exceptions/EntityValidationException'

export class EntityBase {
    async validate() {
        const validationErrors = await validate(this)

        const validationResult = new EntityValidationErrors(validationErrors)

        if (!validationResult.isValid) throw new EntityValidationException(validationResult)
    }
}
