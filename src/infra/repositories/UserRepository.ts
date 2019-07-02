import { User } from '~/domain/user/User';
import { RepositoryBase } from '~/infra/repositories/RepositoryBase';
import { UserModel } from '~/infra/database/typeorm/models/UserModel';
import { IUserRepository } from '~/domain/user/IUserRepository';

export class UserRepository extends RepositoryBase implements IUserRepository {
    async create(users: User[]): Promise<User[]> {
        const userModels = users.map(user => new UserModel(user))
        return this.database.save(userModels)
    }
}