import * as ui from '~/interfaces/routes/_dependencies'

import UserController from '~/interfaces/controllers/user'

export default (api: ui.Router): ui.Router => {
    return api
        .get('/user', ui.routeResolver(UserController.getUser))
        .get('/user/:user', ui.routeResolver(UserController.getUser))
}


