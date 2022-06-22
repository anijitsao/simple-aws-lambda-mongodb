// local dependencies
import {
  getAllUsers,
  addUserToDB,
  deleteUserFromDB,
  updateUserToDB,
} from "../dbRelated/userdbOps.js";

import { sendResponse } from "../helpers/sendResponse.js";
import { verifyToken } from "../helpers/jwtHelper.js";

const getAllUsersHandler = async (event) => {
  const verified = verifyToken(event);
  if (!verified) {
    return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
      message: "Token validation error",
    });
  }
  return getAllUsers();
};

const addUserHandler = async (event) => {
  const verified = verifyToken(event);
  if (!verified) {
    return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
      message: "Token validation error",
    });
  }
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
  const verified = verifyToken(event);
  if (!verified) {
    return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
      message: "Token validation error",
    });
  }
  // extracting the recordId from query string
  const recordId = event?.queryStringParameters?.recordId;

  // if the delete parameters are not present
  if (!recordId) {
    return sendResponse(process.env.ERROR_CODE, {
      message: "Delete parameters can not be blank",
    });
  }
  return deleteUserFromDB(recordId);
};

const updateUserHandler = async (event) => {
  const verified = verifyToken(event);
  if (!verified) {
    return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
      message: "Token validation error",
    });
  }
  const reqBody = event.body && JSON.parse(event.body);
  const { updateId, updateDoc } = reqBody;

  // if update parameters are missing
  if (!updateId || !updateDoc || Object.keys(updateDoc).length === 0) {
    return sendResponse(process.env.ERROR_CODE, {
      message: "Update parameters can not be blank",
    });
  }
  return updateUserToDB(updateId, updateDoc);
};

export {
  getAllUsersHandler,
  addUserHandler,
  deleteUserHandler,
  updateUserHandler,
};
