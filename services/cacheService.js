import redis from 'redis';
const client = redis.createClient(process.env.REDIS_URL);

export const getCache = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      resolve(data ? JSON.parse(data) : null);
    });
  });
};

export const setCache = (key, value) => {
  client.setex(key, 3600, JSON.stringify(value));
};