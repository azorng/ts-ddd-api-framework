import { RouteResolver } from '~/ui/http/utils/RouteResolver'
import { AuthController } from '~/ui/http/controllers/AuthController'

export default (api: Http.Router): Http.Router => {
    return api
        .post(
            '/auth',
            RouteResolver({
                required: ['email', 'password'],
                controller: AuthController.authenticate
            })
        )

        .get(
            '/auth/log-out',
            RouteResolver({
                controller: AuthController.logOut
            })
        )
}
