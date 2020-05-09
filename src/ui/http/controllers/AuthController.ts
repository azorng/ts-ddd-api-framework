import { AuthenticateUserService } from '~/app/AuthenticateUserService'
import { UserRepository } from '~/infra/repositories/UserRepository'

export class AuthController {
    static async authenticate({ email, password, $session }: any) {
        const authenticateService = new AuthenticateUserService()
        const userId = await authenticateService.authenticate(email, password)
        $session.auth = userId
    }

    static async logOut({ $session }: any) {
        $session.destroy()
    }
}
