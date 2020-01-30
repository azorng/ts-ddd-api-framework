import redis from 'redis'
import { env } from '~/config'

const RedisClient = redis.createClient({
    host: env.REDIS_HOST,
    port: 6379
})

RedisClient.on('connect', function() {
    console.log('Redis client connected')
})

RedisClient.on('error', function(err) {
    console.log('Redis client failed', err)
})

export { RedisClient }
