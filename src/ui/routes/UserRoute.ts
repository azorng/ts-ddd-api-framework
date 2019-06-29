import routeResolver from '~/ui/utils/routeResolver'

import UserController from '~/ui/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/user', routeResolver(UserController.getUser))
        .get('/user/:user', routeResolver(UserController.getUser))
        .get('/user/create/:username', routeResolver(UserController.createUser))
}


