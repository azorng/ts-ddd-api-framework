import ResponseSender from '~/ui/utils/ResponseSender'
import ResponseTemplate, { ResponseStatus } from '~/ui/utils/ResponseTemplate'
import _ from '~/lib'

export default (method: any) => (req: Http.Request, res: Http.Response) => {
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

const _getParams = (req: Http.Request) => {
    // Set params from route variables
    let params = !_.isEmpty(req.params) ? req.params
        : !_.isEmpty(req.body) ? req.body
            : {}

    // Inject additional params         
    params.$session = req.session

    return params
}

const _isValidMethod = (method: any, params: object) => !(!params && method.length > 0) 
