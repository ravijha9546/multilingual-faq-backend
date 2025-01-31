const redis = require('redis');

const client = redis.createClient(process.env.REDIS_URL);

client.on('connect', () => {
  console.log('Redis connected successfully');
});

client.on('error', (err) => {
  console.error('Redis connection error:', err);
});

const getCache = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      resolve(data ? JSON.parse(data) : null);
    });
  });
};

const setCache = (key, value) => {
  client.setex(key, 3600, JSON.stringify(value));
};

module.exports = { getCache, setCache };
