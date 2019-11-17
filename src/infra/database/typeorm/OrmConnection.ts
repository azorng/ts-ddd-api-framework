import { createConnection, ConnectionOptions } from 'typeorm'
import path from 'path'
import { env, config, NodeEnv } from '~/config'

const MYSQL_DEV = {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'dev'
}

const MYSQL_PROD = {
    host: env.MYSQL_HOST,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE
}

const mysqlConfig = env.NODE_ENV === NodeEnv.PROD ? MYSQL_PROD : MYSQL_DEV

const connectionConfig: ConnectionOptions = {
    name: 'default',
    type: 'mysql',
    host: mysqlConfig.host,
    port: 3306,
    username: mysqlConfig.username,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    synchronize: true,
    entities: [path.join(config.ROOT_PATH, '/domain/entities/*')]
}

export const CreateDatabaseConnection = async () => createConnection(connectionConfig)
