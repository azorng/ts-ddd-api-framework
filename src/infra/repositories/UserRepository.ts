import { User } from '~/domain/user/User';
import RepositoryBase from '~/infra/repositories/RepositoryBase';
import { UserModel } from '~/infra/database/typeorm/models/UserModel';

export default class UserRepository extends RepositoryBase<User>  {
    async create(user: User): Promise<User> {
        return this.database.save(new UserModel(user))
    }
}