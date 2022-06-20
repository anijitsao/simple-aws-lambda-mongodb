import { dbClient } from "../lib/mongoClient.js";

const createConnectionToDB = async () => {
  const client = await dbClient.connect();
  return client;
};

const closeConnectionToDB = (client) => {
  client.close();
};

export { createConnectionToDB, closeConnectionToDB };
