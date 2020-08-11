import { User } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException'
import { EventBus } from '~/infra/event/EventBus'
import { Event } from '~/app/Events'
import { UserRepository } from '~/infra/repositories/UserRepository'

export class RegisterUserService {
    constructor(private userRepository = new UserRepository()) {}

    async register(user: User) {
        await user.validate()

        await this._checkForDuplicates(user)

        user.password = bcrypt.hash(user.password)
        await this.userRepository.save(user)

        EventBus.publish(Event.user_registered, user)
        return user
    }

    async _checkForDuplicates(user: User) {
        const existingEmail = await this.userRepository.find({ email: user.email })
        if (existingEmail) throw new DuplicateEntryException<User>(user, user.email)
    }
}
