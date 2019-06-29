import { User } from "~/domain/User";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository {
    create(user: User) {
        console.log(user.username, 'was created')
    }
}