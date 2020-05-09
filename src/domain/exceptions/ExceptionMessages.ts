type ExceptionMessagesTranslation = { [key in ExceptionCode | string]: string }

export enum ExceptionCode {
    BAD_CREDENTIALS,
    BAD_REQUEST,
    DUPLICATE_ENTRY,
    ENTITY_NOT_FOUND,
    PW_NOT_SECURE,
    NOT_VALID_EMAIL,
    VALIDATION_FAILED,
    NO_SESSION
}

export const ExceptionMessagesTranslations: ExceptionMessagesTranslation = {
    [ExceptionCode.BAD_CREDENTIALS]: 'Incorrect email or password.',
    [ExceptionCode.DUPLICATE_ENTRY]: 'Duplicated record.',
    [ExceptionCode.ENTITY_NOT_FOUND]: 'Entity not found.',
    [ExceptionCode.PW_NOT_SECURE]: 'Password is not secure.',
    [ExceptionCode.NOT_VALID_EMAIL]: 'Email is not valid.',
    [ExceptionCode.VALIDATION_FAILED]: 'Validation failed.',
    [ExceptionCode.BAD_REQUEST]: 'Bad request.',
    [ExceptionCode.NO_SESSION]: 'There is no session.'
}
