import { AuthenticateUserService } from '~/app/AuthenticateUserService'

export class AuthController {
    static async authenticate({ email, password, $session }: any) {
        const userId = await new AuthenticateUserService().authenticate(email, password)
        $session.auth = userId
    }

    static async logOut({ $session }: any) {
        $session.destroy()
    }
}
