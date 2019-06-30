import { User } from '~/domain/User';
import IUserRepository from './IUserRepository';
import { UserModel } from '../database/typeorm/models/UserModel';
import RepositoryBase from './RepositoryBase';

export default class UserRepository extends RepositoryBase implements IUserRepository {
    async create(user: User) {
        let model = new UserModel()
        model.username = user.username

        this.database.save(model)
    }
}