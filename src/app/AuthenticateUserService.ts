import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { _ } from '~/lib'
import { UserRepository } from '~/infra/repositories/UserRepository'

export class AuthenticateUserService {
    constructor(private userRepository: IUserRepository = new UserRepository()) {}

    async authenticate(email: string, password: string) {
        if (!email || !password) {
            throw new Exception(ExceptionCode.BAD_REQUEST)
        }

        const user = await this.userRepository.fetch({ select: ['password'], where: { email } })

        if (!user || !bcrypt.compare(password, user.password)) {
            throw new Exception(ExceptionCode.BAD_CREDENTIALS)
        }

        return true
    }
}
