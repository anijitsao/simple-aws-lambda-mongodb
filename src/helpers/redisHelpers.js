import { redisClient } from "../lib/redisClient.js";

const connectRedis = async () => {
  await redisClient.connect();
};

// get value based on the key provided
const getValueFromRedis = async (key) => {
  // convert key to String
  key = typeof key !== "string" ? JSON.stringify(key) : key;
  const value = await redisClient.get(key);
  return value;
};

// set the value to key provided
const setValueToRedis = async (key, value) => {
  // convert key, value to String
  key = typeof key !== "string" ? JSON.stringify(key) : key;
  value = typeof value !== "string" ? JSON.stringify(value) : value;

  await redisClient.set(key, value, {
    EX: process.env.REDIS_CACHE_EXPIRY_TIME,
  });
};

// close the redis connection
const closeConnectionToRedis = async () => {
  await redisClient.quit();
};

export {
  connectRedis,
  getValueFromRedis,
  setValueToRedis,
  closeConnectionToRedis,
};
