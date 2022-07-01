import { redisClient } from "../lib/redisClient.js";

const connectRedis = async () => {
  await redisClient.connect();
};

// get value based on the key provided
const getValue = async (key) => {
  const value = await redisClient.get(key);
  return value;
};

// set the value to key provided
const setValue = async (key, value) => {
  await redisClient.set(key, value);
  return;
};

export { connectRedis, getValue, setValue };
