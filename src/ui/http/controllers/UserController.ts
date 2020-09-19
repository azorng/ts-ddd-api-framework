import { User } from '~/domain/entities/User'
import { RegisterUserService } from '~/app/RegisterUserService'
import { UserRepository } from '~/infra/repositories/UserRepository'
import { UserAuthenticationService } from '~/app/UserAuthenticationService'

export class UserController {
    static async createUser({ email, password }: any) {
        const user = new User({
            email,
            password
        })

        await new RegisterUserService().register(user)
    }

    static async getCurrentUser() {
        const userId = UserAuthenticationService.requireAuth()
        return new UserRepository().find({ id: userId })
    }
}
