export default class AuthController {
    static async authenticate({ username, password, $session }: any) {
        if (username == 'azorvk' && password == 123) {
            $session.userInfo = {
                loggedIn: true,
                name: 'azor'
            }
            return 'login successful'
        } else {
            throw 'login failed'
        }
    }

    static async amILoggedIn({ $session }: any) {
        if ($session.userInfo && $session.userInfo.loggedIn) {
            return `you are logged in, welcome back ${$session.userInfo.name}`
        } else {
            return 'you are not logged in'
        }
    }

    static async logOut({ $session }: any) {
        $session.userInfo = {}
        return 'logged out :('
    }
}