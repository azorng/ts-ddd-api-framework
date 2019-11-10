import expressSession from 'express-session'
import redisConnect from 'connect-redis'
import { redisConnectOptions } from '~/infra/database/redis/RedisConnectOptions'

const Store = redisConnect(expressSession)

export const session = expressSession({
    secret: 'topsecret',
    store: new Store(redisConnectOptions),
    saveUninitialized: false,
    resave: false
})
