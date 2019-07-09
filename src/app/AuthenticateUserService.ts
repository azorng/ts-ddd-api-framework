import { IUserRepository } from '~/domain/user/IUserRepository';
import { bcrypt } from '~/infra/crypto/bcrypt';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';

export class AuthenticateUserService {
    constructor(private userRepository: IUserRepository) { }

    async authenticate(username: string, password: string) {
        const user = await this.userRepository.fetch({ username })

        if (!user) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        const areRightCredentials = await bcrypt.compare(password, user.password)

        if (!areRightCredentials) throw new Exception(ExceptionCode.BAD_CREDENTIALS)

        return true
    }
}