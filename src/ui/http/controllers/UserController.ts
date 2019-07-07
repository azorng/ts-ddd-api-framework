import { UserRepository } from '~/infra/repositories/UserRepository';
import { User } from '~/domain/user/User';
import { RegisterUserService } from '~/app/RegisterUserService';
import { EntityNotFoundException } from '~/infra/exceptions/EntityNotFoundException';

export class UserController {
    static async getUser({ username }: any) {
        const user = await new UserRepository().fetch({ username })
        if (!user) throw new EntityNotFoundException()
        return user
    }

    static async createUser({ username, password }: any) {
        const user = new User({
            username,
            password
        })

        const registerService = new RegisterUserService(new UserRepository())

        return registerService.register(user)
    }
}