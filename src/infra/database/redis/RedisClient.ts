import redis from 'redis'
import { env } from '~/config'
import Logger from '~/infra/Logger'

const RedisClient = redis.createClient({
    host: env.REDIS_HOST,
    port: 6379
})

RedisClient.on('connect', function () {
    Logger.log('Redis client connected')
})

RedisClient.on('error', function (err) {
    Logger.error('Redis client error', err)
})

export { RedisClient }
