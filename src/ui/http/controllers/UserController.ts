import { User, UserProps } from '~/domain/entities/User'
import { RegisterUserService } from '~/app/RegisterUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { AuthUtil } from '~/ui/http/utils/AuthUtil'
import { RepositoryBase } from '~/infra/repositories/RepositoryBase'
import { UserRepository } from '~/infra/repositories/UserRepository'

export class UserController {
    static async getUser({ id }: any) {
        const user = await new UserRepository().find({ uuid: id })
        if (!user) throw new Exception(ExceptionCode.ENTITY_NOT_FOUND)
        return user
    }

    static async getAllUsers() {
        return new RepositoryBase(User).findAll()
    }

    static async createUser({ email, password, $session }: any) {
        const userProps: UserProps = {
            email,
            password
        }

        const user = new User(userProps)
        const registeredUser = new RegisterUserService().register(user)
        $session.auth = (await registeredUser).id

        return registeredUser
    }

    static async getCurrentUser({ $session }: any) {
        const userId = AuthUtil.authRequired($session)
        return new UserRepository().find({ id: userId })
    }
}
