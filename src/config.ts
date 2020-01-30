export enum NodeEnv {
    PROD,
    DEV
}

export const config = {
    ROOT_PATH: __dirname
}

export const env = {
    NODE_ENV: process.env.NODE_ENV === 'production' ? NodeEnv.PROD : NodeEnv.DEV,
    PORT: process.env.PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY
}
