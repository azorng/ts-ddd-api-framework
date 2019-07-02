import expressSession from 'express-session'
import { RedisClient } from '~/infra/database/redis/Client'
import redisConnect from 'connect-redis'

const Store = redisConnect(expressSession)

export const session = expressSession({
    secret: 'topsecret',
    store: new Store({ host: 'localhost', port: 6379, client: RedisClient, ttl: 260 }),
    saveUninitialized: false,
    resave: false
})