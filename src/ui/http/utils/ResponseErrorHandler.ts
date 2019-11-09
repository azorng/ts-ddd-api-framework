import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionMessagesTranslations, ExceptionCodes } from '~/domain/exceptions/ExceptionMessages';
import { Language } from '~/domain/Language';

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            const language = Language['EN']
            const exceptionCode: any = error.name

            error.message = ExceptionMessagesTranslations[language][ExceptionCodes[exceptionCode]]

            response = new ResponseTemplate(ResponseStatus.fail, error)
        } else {
            response = new ResponseTemplate(ResponseStatus.error, 'Unexpected Error')
            console.log(error)
        }
        return response
    }
} 