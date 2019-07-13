import { AuthenticateUserService } from '~/app/AuthenticateUserService';
import { UserRepository } from '~/infra/repositories/UserRepository';

export class AuthController {
    static async authenticate({ username, password, $session }: any) {
        const authenticateService = new AuthenticateUserService(new UserRepository())
        const isValid = await authenticateService.authenticate(username, password)

        if (isValid) {
            $session.userInfo = {
                loggedIn: true,
                username
            }
        }
    }

    static async amILoggedIn({ $session }: any) {
        if ($session.userInfo && $session.userInfo.loggedIn) {
            return `You are logged in, welcome back ${$session.userInfo.username}`
        } else {
            return 'You are not logged in'
        }
    }

    static async logOut({ $session }: any) {
        $session.userInfo = {}
        return 'Logged out :('
    }
}