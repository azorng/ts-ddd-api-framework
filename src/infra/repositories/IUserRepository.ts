import { IRepository } from '~/infra/repositories/IRepository'
import { User } from '~/domain/entities/User'

export interface IUserRepository extends IRepository<User> {}
