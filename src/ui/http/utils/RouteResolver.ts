import { ResponseSender } from '~/ui/http/utils/ResponseSender'
import { ResponseTemplate, ResponseStatus } from '~/ui/http/utils/ResponseTemplate'
import { ResponseErrorHandler } from '~/ui/http/utils/ResponseErrorHandler'
import { _ } from '~/lib'
import { Session } from '~/infra/Session'
import { RequiredFieldException } from '~/app/exceptions/RequiredFieldException'

export interface RouteSpecification {
    required?: string[]
    controller: any
}

export const RouteResolver = (route: RouteSpecification) => (
    req: Http.Request,
    res: Http.Response
) => {
    const params = _getParams(req)
    const sender = new ResponseSender(res)

    Session.namespace.run(async () => {
        try {
            _validateParams(route.required, params)

            Session.auth = req.session?.auth
            Session.express = req.session

            const result = await route.controller(params)
            sender.send(new ResponseTemplate(ResponseStatus.success, result, 200))
        } catch (e) {
            sender.send(ResponseErrorHandler.generateResponse(e))
        }
    })
}

const _getParams = (req: Http.Request) => {
    return req.method === 'POST' ? req.body : req.params
}

const _validateParams = (requiredParams: string[] | undefined, actualParams: any) => {
    if (!requiredParams) return
    for (const param of requiredParams) {
        if (param && actualParams[param] === undefined) {
            throw new RequiredFieldException(param)
        }
    }
}
