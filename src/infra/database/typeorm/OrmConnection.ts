import { createConnection, getConnection, getManager, ConnectionOptions } from 'typeorm';
import UserModel from '~/infra/database/typeorm/models/UserModel'

const conf: ConnectionOptions = {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    synchronize: true,
    entities: [UserModel]
}

export const CreateDatabaseConnection = async () => createConnection(conf)

export const DatabaseConnection = () => getConnection()

export const Database = () => getManager()
