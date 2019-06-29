import routeResolver from '~/ui/utils/routeResolver'

import AuthController from '~/ui/controllers/AuthController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/auth/:username/:password', routeResolver(AuthController.authenticate))
        .get('/auth/am-i-logged-in', routeResolver(AuthController.amILoggedIn))
        .get('/auth/logOut', routeResolver(AuthController.logOut))
}