import { ResponseTemplate } from '~/ui/http/utils/ResponseTemplate'

export class ResponseSender {
    constructor(private res: Http.Response) {
        this.res = res
    }

    send(response: ResponseTemplate) {
        this.res.status(response.code).json(response)
    }
}
