import { User } from '~/domain/user/User';
import { UserEntity } from '~/infra/database/typeorm/entities/UserEntity';
import { IUserRepository } from '~/domain/user/IUserRepository';
import { FakeRepositoryBase } from './FakeRepositoryBase';
import { _ } from '~/lib';

export class FakeUserRepository extends FakeRepositoryBase<User, UserEntity> implements IUserRepository {

    constructor(users?: UserEntity[]) {
        super(UserEntity, users)
    }

}