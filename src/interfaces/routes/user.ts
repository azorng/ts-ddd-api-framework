import * as ui from '~/interfaces/routes/_dependencies'

const { userController } = require('~/interfaces/controllers')

export default (api: ui.Router): ui.Router => {
    return api
        .get('/user', ui.expressRouteResolver(userController.getUser))
        .get('/user/:user', ui.expressRouteResolver(userController.getUser))
}

