import { Database } from '~/infra/database/typeorm/OrmConnection'

export default class RepositoryBase {
    database: Db.Manager
    constructor() {
        this.database = Database()
    }
}