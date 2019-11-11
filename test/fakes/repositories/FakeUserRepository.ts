import { User } from '~/domain/entities/User'
import { IUserRepository } from '~/infra/repositories/IUserRepository'
import { FakeRepositoryBase } from './FakeRepositoryBase'
import { _ } from '~/lib'

export class FakeUserRepository extends FakeRepositoryBase<User> implements IUserRepository {
    constructor(users?: User[]) {
        super(users)
    }
}
