import * as ui from '~/interfaces/routes/_dependencies'

import UserController from '~/interfaces/controllers/user'

const userController = new UserController();

export default (api: ui.Router): ui.Router => {
    return api
        .get('/user', ui.routeResolver(userController.getUser))
        .get('/user/:user', ui.routeResolver(userController.getUser))
}


