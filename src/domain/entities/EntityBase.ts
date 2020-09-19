import { validate } from 'class-validator'
import { EntityValidationException } from '~/app/exceptions/EntityValidationException'
import { EntityValidationErrors } from '~/infra/exceptions/EntityValidationError'

export class EntityBase {
    async validate() {
        const validationErrors = await validate(this)

        const validationResult = new EntityValidationErrors(validationErrors)

        if (!validationResult.isValid) throw new EntityValidationException(validationResult)
    }
}
