import { RedisClient } from '~/infra/database/redis/RedisClient'

export const redisConnectOptions = {
    host: 'localhost',
    port: 6379,
    client: RedisClient,
    ttl: 260
} 