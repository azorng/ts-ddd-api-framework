import * as ui from '~/ui/routes/_dependencies'

import UserController from '~/ui/controllers/UserController'

export default (api: ui.Router): ui.Router => {
    return api
        .get('/user', ui.routeResolver(UserController.getUser))
        .get('/user/:user', ui.routeResolver(UserController.getUser))
        .get('/user/create/:username', ui.routeResolver(UserController.createUser))
}


