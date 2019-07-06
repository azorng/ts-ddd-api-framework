import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { UserController } from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .get('/user/:username', RouteResolver(UserController.getUser))
        .post('/user', RouteResolver(UserController.createUser))
}


