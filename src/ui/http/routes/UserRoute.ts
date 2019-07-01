import routeResolver from '~/ui/http/utils/RouteResolver'

import UserController from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/user', routeResolver(UserController.getUser))
        .get('/user/:user', routeResolver(UserController.getUser))
        .get('/user/create/:username', routeResolver(UserController.createUser))
}


