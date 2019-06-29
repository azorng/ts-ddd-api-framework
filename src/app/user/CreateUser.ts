import IUserRepository from "~/infra/repositories/IUserRepository";
import { User } from "~/domain/User";

export default class CreateUser {
    userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    create(user: User) {
        this.userRepository.create(user)
    }
    
}