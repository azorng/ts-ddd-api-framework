import { User } from '~/domain/User';
import IUserRepository from './IUserRepository';
import { UserModel } from '../database/typeorm/models/UserModel';
import RepositoryBase from './RepositoryBase';

export default class UserRepository extends RepositoryBase implements IUserRepository {
    async create(user: User): Promise<User> {
        return this.database.save(new UserModel(user))
    }
}