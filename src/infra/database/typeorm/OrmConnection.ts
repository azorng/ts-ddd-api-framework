import { createConnection, ConnectionOptions } from 'typeorm';
import path from 'path'

const conf: ConnectionOptions = {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    synchronize: true,
    entities: [path.join(__dirname, '/entities/*')]
}

export const CreateDatabaseConnection = async () => createConnection(conf)
