import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { AuthController } from '~/ui/http/controllers/AuthController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/auth/:username/:password', RouteResolver(AuthController.authenticate))
        .get('/auth/am-i-logged-in', RouteResolver(AuthController.amILoggedIn))
        .get('/auth/logOut', RouteResolver(AuthController.logOut))
}