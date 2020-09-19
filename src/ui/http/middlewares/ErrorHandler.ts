import { Exception } from '~/infra/exceptions/Exception'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { ResponseErrorHandler } from '~/ui/http/utils/ResponseErrorHandler'

export class ErrorHandler {
    static 404(req: any, res: any, next: any) {
        res.status(404).json(
            ResponseErrorHandler.generateResponse(new Exception(ExceptionCode.NOT_FOUND))
        )
    }

    static handle(err: any, req: any, res: any, next: any) {
        const exceptionCode =
            err.status < 500 ? ExceptionCode.BAD_REQUEST : ExceptionCode.INTERNAL_ERROR
        const exception = new Exception(exceptionCode)
        res.status(exception.statusCode).json(ResponseErrorHandler.generateResponse(exception))
    }
}
