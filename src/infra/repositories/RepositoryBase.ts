import { Database } from '~/infra/database/typeorm/OrmConnection'
import IRepository from '~/domain/IRepository';

export default abstract class RepositoryBase<T> implements IRepository<T>{
    database: Db.Manager
    constructor() {
        this.database = Database()
    }

    abstract create(entity: T): Promise<T> 
}