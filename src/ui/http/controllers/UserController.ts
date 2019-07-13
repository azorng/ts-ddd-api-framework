import { UserRepository } from '~/infra/repositories/UserRepository';
import { User } from '~/domain/user/User';
import { RegisterUserService } from '~/app/RegisterUserService';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';

export class UserController {
    static async getUser({ username }: any) {
        const user = await new UserRepository().fetch({ username })
        if (!user) throw new Exception(ExceptionCode.ENTITY_NOT_FOUND)
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