type ExceptionMessage = { [key in ExceptionCode]: string }
type ExceptionStatusCode = { [key in ExceptionCode]?: number }

export enum ExceptionCode {
    BAD_CREDENTIALS,
    BAD_REQUEST,
    DUPLICATE_ENTRY,
    NOT_FOUND,
    VALIDATION_FAILED,
    NO_SESSION,
    NOT_IMPLEMENTED,
    INTERNAL_ERROR
}

export const ExceptionMessage: ExceptionMessage = {
    [ExceptionCode.BAD_CREDENTIALS]: 'Incorrect email or password.',
    [ExceptionCode.DUPLICATE_ENTRY]: 'Duplicated record.',
    [ExceptionCode.VALIDATION_FAILED]: 'Validation failed.',
    [ExceptionCode.BAD_REQUEST]: 'Bad request.',
    [ExceptionCode.NO_SESSION]: 'There is no session.',
    [ExceptionCode.NOT_FOUND]: 'Resource not found.',
    [ExceptionCode.NOT_IMPLEMENTED]: 'Not implemented.',
    [ExceptionCode.INTERNAL_ERROR]:
        'The server encountered an internal error and was unable to complete the request.'
}

// Defaults to 400 if not specified
export const ExceptionStatusCode: ExceptionStatusCode = {
    [ExceptionCode.NOT_FOUND]: 404,
    [ExceptionCode.NO_SESSION]: 401,
    [ExceptionCode.INTERNAL_ERROR]: 500
}
