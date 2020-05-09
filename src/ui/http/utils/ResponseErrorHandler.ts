import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionMessagesTranslations, ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            const exceptionCode: any = error.name

            error.message = ExceptionMessagesTranslations[ExceptionCode[exceptionCode]]

            response = new ResponseTemplate(ResponseStatus.fail, error)
        } else {
            response = new ResponseTemplate(ResponseStatus.error, 'Unexpected Error')
            console.log(error)
        }
        return response
    }
}
