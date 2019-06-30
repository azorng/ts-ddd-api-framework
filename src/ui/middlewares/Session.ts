import session from 'express-session'
import redisClient from '~/infra/database/redis/Client'
import redisConnect from 'connect-redis'

const Store = redisConnect(session)

export default session({
    secret: 'shh',
    store: new Store({ host: 'localhost', port: 6379, client: redisClient, ttl: 260 }),
    saveUninitialized: false,
    resave: false
})