import { IUserRepository } from '~/domain/user/IUserRepository';
import { User } from '~/domain/user/User';
import { bcrypt } from '~/infra/crypto/bcrypt';

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) { }

    async register(user: User) {
        const userExists = await this.userRepository.fetch({ username: user.username })

        if (userExists) throw 'This username already exists'

        user.password = await bcrypt.hash(user.password)

        return this.userRepository.save(user)
    }
}