import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate'
import { Exception } from '~/infra/exceptions/Exception'
import Logger from '~/infra/Logger'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'

export class ResponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            response = new ResponseTemplate(ResponseStatus.fail, error, error.statusCode)
        } else {
            const internalError = new Exception(ExceptionCode.INTERNAL_ERROR)
            response = new ResponseTemplate(
                ResponseStatus.error,
                internalError,
                internalError.statusCode
            )
            Logger.jsError(error)
        }
        return response
    }
}
