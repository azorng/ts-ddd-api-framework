import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate';
import { Exception } from '~/domain/Exception';

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (error instanceof Exception) {
            response = new ResponseTemplate(ResponseStatus.fail, { name: error.name, message: error.message })
        } else {
            response = new ResponseTemplate(ResponseStatus.error, 'Unexpected Error')
            console.log(error)
        }
        return response
    }
} 