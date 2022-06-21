// local dependencies
import { sendResponse } from "../helpers/sendResponse.js";
import {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
} from "../helpers/dbHelpers.js";

// top level await to connect the MongoDB Atlas
// const client = await dbClient.connect();

// all the db related process variables
const {
  URI_TO_CONNECT_MONGODB,
  DB_NAME,
  COLLECTION_USER_STICKER,
  SUCCESS,
  SERVER_ERR,
  SUCCESS_CODE,
  ERROR_CODE,
} = process.env;

const getAllUsers = async () => {
  const client = await createConnectionToDB();
  try {
    // select the db, Collections are selected based on needs
    const db = selectDB(client, DB_NAME);

    // query the collection for all users
    const data = await db
      .collection(COLLECTION_USER_STICKER)
      .find({})
      .toArray();

    const users = data.length > 0 ? [...data] : [];
    const res = { users };

    return sendResponse(SUCCESS_CODE, res);
  } catch (error) {
    // console.error("Error occurred", error);
    return sendResponse(ERROR_CODE, { error });
  } finally {
    // close the connection to MongoDB Atlas
    closeConnectionToDB(client);
  }
};

const addUserToDB = async (userToAdd) => {
  const client = await createConnectionToDB();
  try {
    // select the db, Collections are selected based on needs
    const db = selectDB(client, DB_NAME);

    // insert the user in the collection
    const res = await db
      .collection(COLLECTION_USER_STICKER)
      .insertOne(userToAdd);

    return sendResponse(SUCCESS_CODE, { ...userToAdd, _id: res.insertedId });
  } catch (error) {
    // console.error("Error occurred", error);
    return sendResponse(ERROR_CODE, { error });
  } finally {
    // close the connection to MongoDB Atlas
    closeConnectionToDB(client);
  }
};

const deleteUserFromDB = async (recordId) => {
  const client = await createConnectionToDB();
  try {
    // select the db, Collections are selected based on needs
    const db = selectDB(client, DB_NAME);

    // delete the particurlar record from the collection
    const res = await db
      .collection(COLLECTION_USER_STICKER)
      .deleteOne({ _id: convertToObjectId(recordId) });

    return sendResponse(SUCCESS_CODE, { deletedCount: res.deletedCount });
  } catch (error) {
    return sendResponse(ERROR_CODE, { error });
  } finally {
    // close the connection to MongoDB Atlas
    closeConnectionToDB(client);
  }
};

const updateUserToDB = async (updateId, updateDoc) => {
  const client = await createConnectionToDB();
  try {
    // select the db, Collections are selected based on needs
    const db = selectDB(client, DB_NAME);

    const filter = { _id: convertToObjectId(updateId) };
    // const options = { upsert: false };

    // update the record in the collection
    const res = await db
      .collection(COLLECTION_USER_STICKER)
      .updateOne(filter, { $set: { ...updateDoc } });

    return sendResponse(SUCCESS_CODE, { modifiedCount: res.modifiedCount });
  } catch (error) {
    console.error("Error occurred: ", error);
    return sendResponse(ERROR_CODE, { error });
  } finally {
    // close the connection to MongoDB Atlas
    closeConnectionToDB(client);
  }
};

export { getAllUsers, addUserToDB, deleteUserFromDB, updateUserToDB };
