import { IUserRepository } from '~/domain/user/IUserRepository';
import { bcrypt } from '~/infra/crypto/bcrypt';

const BAD_CREDENTIALS = 'Incorrect username or password'

export class AuthenticateUserService {
    constructor(private userRepository: IUserRepository) { }

    async authenticate(username: string, password: string) {
        const user = await this.userRepository.fetch({ username })

        if (!user) throw BAD_CREDENTIALS

        const correctCredentials = await bcrypt.compare(password, user.password)

        if (!correctCredentials) throw BAD_CREDENTIALS

        return true
    }
}