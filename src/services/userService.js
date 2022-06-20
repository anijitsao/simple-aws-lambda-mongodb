// local dependencies
import {
  getAllUsers,
  addUserToDB,
  deleteUserFromDB,
  updateUserToDB,
} from "../dbRelated/userdbOps.js";
import { sendResponse } from "../helpers/sendResponse.js";

const getAllUsersHandler = async (event) => {
  return getAllUsers();
};

const addUserHandler = async (event) => {
  const reqBody = event?.body && JSON.parse(event.body);

  // if the request body contains nothing
  if (!reqBody || Object.keys(reqBody).length === 0) {
    return sendResponse(process.env.ERROR_CODE, {
      message: "Fields can not be blank",
    });
  }
  return addUserToDB(reqBody);
};

const deleteUserHandler = async (event) => {
  return deleteUserFromDB();
};

const updateUserHandler = async (event) => {
  return updateUserToDB();
};

export {
  getAllUsersHandler,
  addUserHandler,
  deleteUserHandler,
  updateUserHandler,
};
