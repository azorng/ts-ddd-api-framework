import { User } from '~/domain/user/User';
import { RepositoryBase } from '~/infra/repositories/RepositoryBase';
import { UserEntity } from '~/infra/database/typeorm/entities/UserEntity';
import { IUserRepository } from '~/domain/user/IUserRepository';

export class UserRepository extends RepositoryBase<User, UserEntity> implements IUserRepository {
    constructor() {
        super(UserEntity)
    }
}

