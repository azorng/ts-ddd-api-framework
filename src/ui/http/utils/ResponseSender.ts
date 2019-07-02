import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate'

export class ResponseSender {
    res: Http.Response;
    constructor(res: Http.Response) {
        this.res = res
    }

    send(response: ResponseTemplate) {
        this.res
            .status(statusNameToCode(response.response.status))
            .json(response.response)
    }

    send400(body = {}) {
        this.res
            .status(statusNameToCode(ResponseStatus.error))
            .json({
                status: ResponseStatus.error,
                body
            })
    }
}

const statusNameToCode = (statusName: ResponseStatus): number => {
    const responseCode: { [key in ResponseStatus]: number } = {
        [ResponseStatus.success]: 200,
        [ResponseStatus.error]: 500,
        [ResponseStatus.fail]: 400
    }

    return responseCode[statusName]
}