import { UserRepository } from '~/infra/repositories/UserRepository'
import { User, UserProps } from '~/domain/entities/User'
import { RegisterUserService } from '~/app/RegisterUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

export class UserController {
    static async getUser({ id }: any) {
        const user = await new UserRepository().find({ id })
        if (!user) throw new Exception(ExceptionCode.ENTITY_NOT_FOUND)
        return user
    }

    static async getAllUsers() {
        return new UserRepository().findAll()
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

    static async getCurrentUser({ $session }: any) {
        if ($session.auth) {
            return new UserRepository().find({ id: $session.auth })
        } else {
            throw new Exception(ExceptionCode.NO_SESSION)
        }
    }
}
