import routeResolver from '~/ui/http/utils/RouteResolver'

import AuthController from '~/ui/http/controllers/AuthController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/auth/:username/:password', routeResolver(AuthController.authenticate))
        .get('/auth/am-i-logged-in', routeResolver(AuthController.amILoggedIn))
        .get('/auth/logOut', routeResolver(AuthController.logOut))
}