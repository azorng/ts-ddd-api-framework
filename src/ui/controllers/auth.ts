export default class AuthController {
    static authenticate({ username, password, $session }: any) {
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

    static amILoggedIn({ $session }: any) {
        if ($session.userInfo && $session.userInfo.loggedIn) {
            return `you are logged in, welcome back ${$session.userInfo.name}`
        } else {
            return 'you are not logged in'
        }
    }

    static logOut({ $session }: any) {
        $session.userInfo = {}
        return 'logged out :('
    }
}