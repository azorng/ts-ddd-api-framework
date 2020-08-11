import { createConnection, ConnectionOptions } from 'typeorm'
import path from 'path'
import { env, config } from '~/config'

const connectionConfig: ConnectionOptions = {
    name: 'default',
    type: 'mysql',
    host: env.MYSQL_HOST,
    port: 3306,
    username: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    synchronize: true,
    entities: [path.join(config.ROOT_PATH, '/domain/entities/*')]
}

export const CreateDatabaseConnection = () => createConnection(connectionConfig)
