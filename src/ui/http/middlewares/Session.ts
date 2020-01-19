import expressSession from 'express-session'
import redisConnect from 'connect-redis'
import { redisConnectOptions } from '~/infra/database/redis/RedisConnectOptions'
import { env, NodeEnv } from '~/config'
import uuidv4 from 'uuid/v4'

const Store = redisConnect(expressSession)

export const session = expressSession({
    secret: env.NODE_ENV === NodeEnv.PROD ? env.SESSION_SECRET_KEY! : uuidv4(),
    store: new Store(redisConnectOptions),
    saveUninitialized: false,
    resave: false
})
