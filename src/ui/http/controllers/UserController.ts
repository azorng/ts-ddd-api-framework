import { UserRepository } from '~/infra/repositories/UserRepository';
import { User } from '~/domain/user/User';
import { RegisterUserService } from '~/app/RegisterUserService';

export class UserController {
    static async getUser({ username }: any) {
        return new UserRepository().fetch({ username })
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