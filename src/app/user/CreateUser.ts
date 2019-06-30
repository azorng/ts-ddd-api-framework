import IUserRepository from "~/infra/repositories/IUserRepository";
import { User } from "~/domain/User";

export default class CreateUser {
    userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async create(user: User) {
        return this.userRepository.create(user)
    }
    
}