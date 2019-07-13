import { User } from '~/domain/user/User';
import { RepositoryBase } from '~/infra/repositories/RepositoryBase';
import { UserEntity } from '~/infra/database/typeorm/entities/UserEntity';
import { IUserRepository } from '~/domain/user/IUserRepository';
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException';

export class UserRepository extends RepositoryBase<User, UserEntity> implements IUserRepository {
    constructor() {
        super(UserEntity)
    }

    async save(user: User): Promise<UserEntity> {
        const userExists = await super.fetch({ username: user.username })
        if (userExists) throw new DuplicateEntryException(user, user.username)
        return super.save(new UserEntity(user))
    }
}

