import { Request, Response } from 'express'
import ExpressResponse from '~/interfaces/utils/response'

export default class Sender {
    result: Response;
    constructor(result: Response) {
        this.result = result
    }

    send(response: ExpressResponse) {
        const res = response.response
        this.result
            // .status(res.status)
            .json(res)
    }

    send400(body = {}) {
        this.result
            // .status(400)
            .json({
                // status: 'error',
                body
            })
    }
}
