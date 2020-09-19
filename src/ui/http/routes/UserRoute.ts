import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { UserController } from '~/ui/http/controllers/UserController'

export default (api: Http.Router): Http.Router => {
    return api
        .post(
            '/users',
            RouteResolver({
                required: ['email', 'password'],
                controller: UserController.createUser
            })
        )

        .get(
            '/users/me',
            RouteResolver({
                controller: UserController.getCurrentUser
            })
        )
}
