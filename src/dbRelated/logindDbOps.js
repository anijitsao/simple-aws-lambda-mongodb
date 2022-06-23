// local dependencies
import {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
} from "../helpers/dbHelpers.js";
import { sendResponse } from "../helpers/sendResponse.js";

// all the db related process variables
const { DB_NAME, COLLECTION_USER_STICKER } = process.env;

const findUserFromDb = async (userInfo) => {
  const client = await createConnectionToDB();

  try {
    // select the db, Collections are selected based on needs
    const db = selectDB(client, DB_NAME);

    const options = {
      projection: {
        _id: 0,
        username: 1,
        name: 1,
      },
    };

    // query the collection for the specific  users
    const data = await db
      .collection(COLLECTION_USER_STICKER)
      .findOne(userInfo, options);

    // send the user info if present in DB
    return data;
  } catch (error) {
    return { error: error.toString() };
  } finally {
    closeConnectionToDB(client);
  }
};

export { findUserFromDb };
