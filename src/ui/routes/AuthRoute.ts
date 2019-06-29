import * as ui from '~/ui/routes/_dependencies'

import AuthController from '~/ui/controllers/AuthController'

export default (api: ui.Router): ui.Router => {
    return api
        .get('/auth/:username/:password', ui.routeResolver(AuthController.authenticate))
        .get('/auth/am-i-logged-in', ui.routeResolver(AuthController.amILoggedIn))
        .get('/auth/logOut', ui.routeResolver(AuthController.logOut))
}


