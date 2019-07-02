import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { UserController } from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/user', RouteResolver(UserController.getUser))
        .get('/user/:user', RouteResolver(UserController.getUser))
        .get('/user/create/:username', RouteResolver(UserController.createUser))
}


