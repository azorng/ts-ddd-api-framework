import IRepository from '~/domain/IRepository';
import { User } from '~/domain/user/User';

export default class CreateUser {
    userRepository: IRepository<User>

    constructor(userRepository: IRepository<User>) {
        this.userRepository = userRepository
    }

    async create(user: User) {
        return this.userRepository.create(user)
    }
}