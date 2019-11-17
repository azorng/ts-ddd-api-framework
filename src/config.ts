export enum NodeEnv {
    PROD,
    DEV
}

export const config = {
    ROOT_PATH: __dirname
}

export const env = {
    NODE_ENV: process.env.NODE_ENV === 'production' ? NodeEnv.PROD : NodeEnv.DEV,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE
}
