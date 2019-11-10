import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { User, UserProps } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException'

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) {}

    async register(userProps: UserProps) {
        const user = new User(userProps)
        await user.validate()

        const existingEmail = await this.userRepository.fetch({ email: user.email })
        if (existingEmail) throw new DuplicateEntryException<User>(user, user.email)

        user.password = await bcrypt.hash(user.password)
        return this.userRepository.save(user)
    }
}
