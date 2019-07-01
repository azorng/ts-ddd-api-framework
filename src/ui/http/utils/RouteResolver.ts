import ResponseSender from '~/ui/http/utils/ResponseSender'
import ResponseTemplate, { ResponseStatus } from '~/ui/http/utils/ResponseTemplate'
import _ from '~/lib'

export default (method: any) => (req: Http.Request, res: Http.Response) => {
    const params: object = _getParams(req)
    const sender = new ResponseSender(res)

    if (_isValidMethod(method, params)) {
        const methodResult = _executeMethod(method, params)
        _processPromiseResponse(methodResult, sender)
    } else {
        sender.send400()
    }

}

const _processPromiseResponse = (promise: Promise<any>, sender: ResponseSender) => {
    promise
        .then(res => {
            sender.send(new ResponseTemplate(ResponseStatus.success, res))
        })
        .catch(error => {
            sender.send(new ResponseTemplate(ResponseStatus.fail, error))
        })
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
