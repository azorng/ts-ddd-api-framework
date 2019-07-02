import { IRepository } from '~/domain/IRepository';
import { User } from '~/domain/user/User';

export interface IUserRepository extends IRepository<User> {

}