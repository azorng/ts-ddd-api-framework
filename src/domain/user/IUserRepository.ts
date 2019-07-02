import IRepository from '~/domain/IRepository';
import { User } from '~/domain/user/User';

export default interface IUserRepository extends IRepository<User> {

}