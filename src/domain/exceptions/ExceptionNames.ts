import { Language } from '~/domain/Languages';

type ExceptionMessagesTranslation = { [key in Language]: { [key in ExceptionCode | string]: string } }

export enum ExceptionCode {
    BAD_CREDENTIALS,
    DUP_ENTRY,
    ENTITY_NOT_FOUND,
    PW_NOT_SECURE
}

export const ExceptionMessagesTranslations: ExceptionMessagesTranslation = {
    [Language.EN]: {
        [ExceptionCode.BAD_CREDENTIALS]: 'Incorrect username or password.',
        [ExceptionCode.DUP_ENTRY]: 'Duplicated record.',
        [ExceptionCode.ENTITY_NOT_FOUND]: 'Entity not found.',
        [ExceptionCode.PW_NOT_SECURE]: 'Password is not secure!'
    }
}