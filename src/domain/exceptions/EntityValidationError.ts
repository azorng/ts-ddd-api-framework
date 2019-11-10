import { ValidationError as ClassValidationError } from 'class-validator'
import { ExceptionMessagesTranslations, ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { Language } from '~/domain/Language'

type errors = {
    name: string
    message: string
}[]

export interface EntityValidationError {
    property: string
    errors: errors
}

export class EntityValidationErrors {
    errors: EntityValidationError[]

    constructor(validationErrors: ClassValidationError[]) {
        this.errors = []
        this._buildErrors(validationErrors)
    }

    public get isValid(): boolean {
        return this.errors.length === 0
    }

    private _buildErrors(validationErrors: ClassValidationError[]): void {
        // TODO: Do not hardcode language
        const language = Language['EN']

        validationErrors.forEach(validationError => {
            const errors: errors = []

            for (const key in validationError.constraints) {
                const errorCode: any = validationError.constraints[key]
                errors.push({
                    name: errorCode,
                    message: ExceptionMessagesTranslations[language][ExceptionCode[errorCode]]
                })
            }

            this.errors.push({
                property: validationError.property,
                errors
            })
        })
    }
}
