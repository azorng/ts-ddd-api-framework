import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { UserController } from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .post('/users', RouteResolver(UserController.createUser))
        .get('/users/', RouteResolver(UserController.getAllUsers))
        .get('/users/:email', RouteResolver(UserController.getUser))
}
