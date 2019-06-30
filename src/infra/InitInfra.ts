import { CreateDatabaseConnection } from '~/infra/database/typeorm/OrmConnection'

export default async () => {
    await CreateDatabaseConnection()
}