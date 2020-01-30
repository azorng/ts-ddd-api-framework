import expressSession from 'express-session'
import redisConnect from 'connect-redis'
import { RedisClient } from '~/infra/database/redis/RedisClient'
import { env } from '~/config'

const Store = redisConnect(expressSession)

export const session = expressSession({
    secret: env.SESSION_SECRET_KEY!,
    store: new Store({ client: RedisClient }),
    saveUninitialized: false,
    resave: false
})
