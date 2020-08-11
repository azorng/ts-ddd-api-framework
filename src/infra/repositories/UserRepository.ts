import { User } from '~/domain/entities/User'
import { RepositoryBase } from '~/infra/repositories/RepositoryBase'

export class UserRepository extends RepositoryBase<User> {
    constructor() {
        super(User)
    }

    getSensitiveDataByEmail(email: string) {
        return this.find({ select: ['id', 'password'], where: { email } })
    }
}
