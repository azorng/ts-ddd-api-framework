import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate';

export class ReponseErrorHandler {
    static generateResponse(error: any) {
        let response: ResponseTemplate
        if (typeof error == 'object' && error.hasOwnProperty('message')) {
            console.log(error)
            response = new ResponseTemplate(ResponseStatus.error, error.message)
        } else if (typeof error == 'string') {
            response = new ResponseTemplate(ResponseStatus.fail, error.toString())
        } else {
            response = new ResponseTemplate(ResponseStatus.fail, error.toString())
            console.log(error)
        }

        return response
    }
} 