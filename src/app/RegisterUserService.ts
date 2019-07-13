import { IUserRepository } from '~/domain/user/IUserRepository';
import { User } from '~/domain/user/User';
import { bcrypt } from '~/infra/crypto/bcrypt';

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) { }

    async register(user: User) {
        user.validate()
        user.password = await bcrypt.hash(user.password)
        return this.userRepository.save(user)
    }
}