import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { User } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException'
import { EventBus } from '~/infra/event/EventBus'
import { Event } from '~/app/Events'

export class RegisterUserService {
    constructor(private userRepository: IUserRepository) {}

    async register(user: User) {
        await user.validate()

        await this._checkForDuplicates(user)

        user.password = bcrypt.hash(user.password)

        user = await this.userRepository.save(user)

        EventBus.publish(Event.user_registered, user)
        return user
    }

    async _checkForDuplicates(user: User) {
        const existingEmail = await this.userRepository.fetch({ email: user.email })
        if (existingEmail) throw new DuplicateEntryException<User>(user, user.email)

        const existingWebsite = await this.userRepository.fetch({ website: user.website })
        if (existingWebsite) throw new DuplicateEntryException<User>(user, user.website)
    }
}
