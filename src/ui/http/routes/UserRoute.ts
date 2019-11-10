import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { UserController } from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .post('/user', RouteResolver(UserController.createUser))
        .get('/user/:email', RouteResolver(UserController.getUser))
}
