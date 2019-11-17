import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { _ } from '~/lib'
import { UserRepository } from '~/infra/repositories/UserRepository'

export class AuthenticateUserService {
    userRepository: IUserRepository

    constructor(userRepository?: IUserRepository) {
        this.userRepository = userRepository || new UserRepository()
    }

    async authenticate(email: string, password: string) {
        const user = await this.userRepository.fetch({ email })
        if (!user) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        const areRightCredentials = bcrypt.compare(password, user.password)
        if (!areRightCredentials) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        return true
    }
}
