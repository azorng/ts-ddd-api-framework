import { Language } from '~/domain/Language';

type ExceptionMessagesTranslation = { [key in Language]: { [key in ExceptionCodes | string]: string } }

export enum ExceptionCodes {
    BAD_CREDENTIALS,
    DUPLICATE_ENTRY,
    ENTITY_NOT_FOUND,
    PW_NOT_SECURE
}

export const ExceptionMessagesTranslations: ExceptionMessagesTranslation = {
    [Language.EN]: {
        [ExceptionCodes.BAD_CREDENTIALS]: 'Incorrect username or password.',
        [ExceptionCodes.DUPLICATE_ENTRY]: 'Duplicated record.',
        [ExceptionCodes.ENTITY_NOT_FOUND]: 'Entity not found.',
        [ExceptionCodes.PW_NOT_SECURE]: 'Password is not secure!'
    }
}