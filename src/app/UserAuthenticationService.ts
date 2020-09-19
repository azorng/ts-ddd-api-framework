import { bcrypt } from '~/infra/crypto/bcrypt'
import { Exception } from '~/infra/exceptions/Exception'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { _ } from '~/lib'
import { UserRepository } from '~/infra/repositories/UserRepository'
import { Session } from '~/infra/Session'

export class UserAuthenticationService {
    constructor(private userRepository = new UserRepository()) {}

    async authenticate(email: string, password: string) {
        if (!email || !password) {
            throw new Exception(ExceptionCode.BAD_REQUEST)
        }

        const user = await this.userRepository.getSensitiveDataByEmail(email)

        if (!user || !bcrypt.compare(password, user.password)) {
            throw new Exception(ExceptionCode.BAD_CREDENTIALS)
        }

        Session.auth = user.id
    }

    async logOut() {
        Session.express?.destroy(() => {})
    }

    static requireAuth() {
        if (!Session.auth) {
            throw new Exception(ExceptionCode.NO_SESSION)
        }

        return Session.auth
    }
}
