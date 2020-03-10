import { AuthenticateUserService } from '~/app/AuthenticateUserService'

export class AuthController {
    static async authenticate({ email, password, $session }: any) {
        const authenticateService = new AuthenticateUserService()
        const isValid = await authenticateService.authenticate(email, password)

        if (isValid) {
            $session.userInfo = {
                loggedIn: true,
                email
            }
        }
    }

    static async amILoggedIn({ $session }: any) {
        return $session.userInfo?.loggedIn
            ? `You are logged in, welcome back ${$session.userInfo.email}.`
            : 'You are not logged in.'
    }

    static async logOut({ $session }: any) {
        $session.userInfo = {}
    }
}
