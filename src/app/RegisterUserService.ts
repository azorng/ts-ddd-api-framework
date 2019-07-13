import { IUserRepository } from '~/domain/user/IUserRepository';
import { User } from '~/domain/user/User';
import { bcrypt } from '~/infra/crypto/bcrypt';
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException';

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) { }

    async register(user: User) {
        const userExists = await this.userRepository.fetch({ username: user.username })
        if (userExists) throw new DuplicateEntryException(user, user.username)

        user.validate()
        user.password = await bcrypt.hash(user.password)
        return this.userRepository.save(user)
    }
}