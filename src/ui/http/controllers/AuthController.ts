import { UserAuthenticationService } from '~/app/UserAuthenticationService'

export class AuthController {
    static async authenticate({ email, password }: any) {
        await new UserAuthenticationService().authenticate(email, password)
    }

    static async logOut() {
        new UserAuthenticationService().logOut()
    }
}
