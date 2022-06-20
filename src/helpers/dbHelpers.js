import { dbClient } from "../lib/mongoClient.js";

const createConnectionToDB = async () => {
  const client = await dbClient.connect();
  return client;
};

const closeConnectionToDB = (client) => {
  client.close();
};

const selectDB = (client, DB_NAME) => {
  return client.db(DB_NAME);
};

export { createConnectionToDB, closeConnectionToDB, selectDB };
