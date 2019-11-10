import { createConnection, ConnectionOptions } from 'typeorm'
import path from 'path'
import { config } from '~/config'

const conf: ConnectionOptions = {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: true,
    entities: [path.join(config.ROOT_PATH, '/domain/entities/*')]
}

export const CreateDatabaseConnection = async () => createConnection(conf)
