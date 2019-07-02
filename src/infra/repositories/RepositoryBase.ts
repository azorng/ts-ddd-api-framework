import { Database } from '~/infra/database/typeorm/OrmConnection'

export class RepositoryBase {
    database: Db.Manager
    constructor() {
        this.database = Database()
    }
}