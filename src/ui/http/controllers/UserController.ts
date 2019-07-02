import { EntityCrudService } from '~/app/EntityCrudService';
import { UserRepository } from '~/infra/repositories/UserRepository';
import { User } from '~/domain/user/User';

export class UserController {
    static async getUser({ user }: any) {
        if (user && user == 'good') {
            return 'this user is good'
        } else {
            throw 'this user is NOT good '
        }
    }

    static async createUser({ username }: any) {
        const user = new User({
            username
        });
        return new EntityCrudService<User>(new UserRepository()).create(user)
    }
}