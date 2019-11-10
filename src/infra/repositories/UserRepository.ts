import { User } from '~/domain/entities/User'
import { RepositoryBase } from '~/infra/repositories/RepositoryBase'
import { IUserRepository } from '~/infra/repositories/IUserRepository'

export class UserRepository extends RepositoryBase<User> implements IUserRepository {
    constructor() {
        super(User)
    }
}
