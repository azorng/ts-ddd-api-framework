import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { _ } from '~/lib'

export class AuthenticateUserService {
    constructor(private userRepository: IUserRepository) {}

    async authenticate(email: string, password: string) {
        const user = await this.userRepository.fetch({ email })
        if (!user) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        const areRightCredentials = await bcrypt.compare(password, user.password)
        if (!areRightCredentials) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        return true
    }
}
