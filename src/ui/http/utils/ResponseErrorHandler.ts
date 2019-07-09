import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionMessagesTranslations, ExceptionCode } from '~/domain/exceptions/ExceptionNames';
import { Language } from '~/domain/Languages';

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            const language = Language['EN']
            const exceptionCode: any = error.name

            error.message = ExceptionMessagesTranslations[language][ExceptionCode[exceptionCode]]

            response = new ResponseTemplate(ResponseStatus.fail, error)
        } else {
            response = new ResponseTemplate(ResponseStatus.error, 'Unexpected Error')
            console.log(error)
        }
        return response
    }
} 