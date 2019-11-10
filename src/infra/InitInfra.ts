import { CreateDatabaseConnection } from '~/infra/database/typeorm/OrmConnection'

export const InitInfra = async () => {
    await CreateDatabaseConnection()
}
