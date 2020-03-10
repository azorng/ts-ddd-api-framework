import { UserRepository } from '~/infra/repositories/UserRepository'
import { User, UserProps } from '~/domain/entities/User'
import { RegisterUserService } from '~/app/RegisterUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export class UserController {
    static async getUser({ email }: any) {
        const user = await new UserRepository().fetch({ email })
        if (!user) throw new Exception(ExceptionCode.ENTITY_NOT_FOUND)
        return user
    }

    static async getAllUsers() {
        return new UserRepository().fetchAll()
    }

    static async createUser({ email, password, name, gender, birthdate }: any) {
        const userProps: UserProps = {
            email,
            password,
            name,
            gender,
            birthdate: new Date(birthdate)
        }

        const user = new User(userProps)
        return new RegisterUserService().register(user)
    }
}
