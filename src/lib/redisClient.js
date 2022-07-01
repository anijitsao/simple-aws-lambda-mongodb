import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_CONNECTION_URL,
});

export { redisClient };
