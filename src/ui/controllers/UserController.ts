import CreateUser from '~/app/user/CreateUser';
import UserRepository from '~/infra/repositories/UserRepository';
import { User } from '~/domain/User';

export default class UserController {
    static getUser({ user }: any) {
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
        return await new CreateUser(new UserRepository).create(user)
    }
}