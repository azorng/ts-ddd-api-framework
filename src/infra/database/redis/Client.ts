import redis from 'redis'

const client = redis.createClient()

client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Redis client failed', err);
});

export default client
