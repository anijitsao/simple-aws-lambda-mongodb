import { redisClient } from "../lib/redisClient.js";

const connectRedis = async () => {
  await redisClient.connect();
};

// get value based on the key provided
const getValueFromRedis = async (key) => {
  const value = await redisClient.get(key);
  return value;
};

// set the value to key provided
const setValueToRedis = async (key, value) => {
  await redisClient.set(key, value);
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
