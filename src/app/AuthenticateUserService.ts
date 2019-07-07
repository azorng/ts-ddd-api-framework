import { IUserRepository } from '~/domain/user/IUserRepository';
import { bcrypt } from '~/infra/crypto/bcrypt';
import { BadCredentialsException } from '~/infra/exceptions/BadCredentialsException';

export class AuthenticateUserService {
    constructor(private userRepository: IUserRepository) { }

    async authenticate(username: string, password: string) {
        const user = await this.userRepository.fetch({ username })

        if (!user) throw new BadCredentialsException()

        const areRightCredentials = await bcrypt.compare(password, user.password)

        if (!areRightCredentials) throw new BadCredentialsException()

        return true
    }
}