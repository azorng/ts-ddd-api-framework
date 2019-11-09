import { IUserRepository } from '~/infra/repositories/IUserRepository';
import { User } from '~/domain/entities/User';
import { bcrypt } from '~/infra/crypto/bcrypt';
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException';

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) { }

    async register(user: User) {
        const usernameExists = await this.userRepository.fetch({ username: user.username })
        if (usernameExists) throw new DuplicateEntryException<User>(user, user.username)

        user.validate()
        user.password = await bcrypt.hash(user.password)
        return this.userRepository.save(user)
    }
}