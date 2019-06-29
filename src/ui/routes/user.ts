import * as ui from '~/ui/routes/_dependencies'

import UserController from '~/ui/controllers/user'

export default (api: ui.Router): ui.Router => {
    return api
        .get('/user', ui.routeResolver(UserController.getUser))
        .get('/user/:user', ui.routeResolver(UserController.getUser))
}


