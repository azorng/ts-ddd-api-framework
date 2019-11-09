import redis from 'redis'

const RedisClient = redis.createClient()

RedisClient.on('connect', function () {
    console.log('Redis client connected');
});

RedisClient.on('error', function (err) {
    console.log('Redis client failed', err);
});

export { RedisClient }
