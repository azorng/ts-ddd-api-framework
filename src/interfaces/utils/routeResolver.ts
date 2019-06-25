import { Request, Response } from 'express'
import ResponseSender from '~/interfaces/utils/responseSender'
import ResponseTemplate, { ResponseStatus } from '~/interfaces/utils/responseTemplate'
import _ from '~/lib'

export default (method: any) => (req: Request, res: Response) => {
    const params: object = _getParams(req)
    const sender = new ResponseSender(res)

    if (_isValidMethod(method, params)) {
        try {
            const methodResult = _executeMethod(method, params)
            sender.send(new ResponseTemplate(ResponseStatus.success, methodResult))
        } catch (err) {
            sender.send(new ResponseTemplate(ResponseStatus.fail, err))
        }
    } else {
        sender.send400()
    }

}

const _executeMethod = (method: any, params: object) => method(params)

const _getParams = (req: Request) => {
    let params = !_.isEmpty(req.params) ? req.params
        : !_.isEmpty(req.body) ? req.body
            : {}
    params.auth = req.get('auth')

    return params
}

const _isValidMethod = (method: any, params: object) => !(!params && method.length > 0) 
