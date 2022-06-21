// local dependencies
import { dbClient, ObjectId } from "../lib/mongoClient.js";

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

const convertToObjectId = (strId) => ObjectId(strId);

export {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
};
