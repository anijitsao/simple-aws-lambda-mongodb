const connectRedis = async () => {
  await client.connect();
};

export { connectRedis };
