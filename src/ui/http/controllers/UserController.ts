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

    static async createUser({ email, password, firstName, lastName, company, website }: any) {
        const userProps: UserProps = {
            email,
            password,
            firstName,
            lastName,
            company,
            website
        }

        const registerService = new RegisterUserService(new UserRepository())

        return registerService.register(userProps)
    }
}
