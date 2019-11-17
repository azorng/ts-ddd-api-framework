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
        if ($session.userInfo && $session.userInfo.loggedIn) {
            return `You are logged in, welcome back ${$session.userInfo.email}`
        } else {
            return 'You are not logged in'
        }
    }

    static async logOut({ $session }: any) {
        $session.userInfo = {}
        return 'Logged out :('
    }
}
