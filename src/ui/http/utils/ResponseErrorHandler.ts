import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionMessages, ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import Logger from '~/infra/Logger'

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            const exceptionCode: any = error.name

            error.message = ExceptionMessages[ExceptionCode[exceptionCode]]

            response = new ResponseTemplate(ResponseStatus.fail, error)
        } else {
            response = new ResponseTemplate(ResponseStatus.error, 'Unexpected Error')
            Logger.error('Undefined error', error)
        }
        return response
    }
}
