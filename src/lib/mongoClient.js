// NPM dependencies
import mongodb from "mongodb";

// initialize the client to connect MongoDB Atlas and export
const { MongoClient } = mongodb;

const dbClient = new MongoClient(process.env.URI_TO_CONNECT_MONGODB);
export { dbClient };
