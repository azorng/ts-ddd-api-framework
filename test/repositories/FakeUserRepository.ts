import { User } from '~/domain/user/User';
import { UserEntity } from '~/infra/database/typeorm/entities/UserEntity';
import { IUserRepository } from '~/domain/user/IUserRepository';
import { DuplicateEntryException } from '~/infra/exceptions/DuplicateEntryException';
import { FakeRepositoryBase } from './FakeRepositoryBase';
import { _ } from '~/lib';

export class FakeUserRepository extends FakeRepositoryBase<User, UserEntity> implements IUserRepository {

    constructor(users?: UserEntity[]) {
        super(UserEntity, users)
    }

    async save(user: User): Promise<UserEntity> {
        const existingUser = await super.fetch({ username: user.username })
        if (existingUser) throw new DuplicateEntryException(user, user.username)
        return super.save(new UserEntity(user))
    }
}