// local dependencies
import { sendResponse } from "../helpers/sendResponse.js";
import { dbClient } from "../lib/mongoClient.js";
import { getAllUsers } from "../helpers/dbOps.js";

const getAllUsersHandler = async (event) => {
  return getAllUsers();
};

const addUserHandler = async (event) => {
  return getAllUsers();
};

const deleteUserHandler = async (event) => {
  return getAllUsers();
};

const updateUserHandler = async (event) => {
  return getAllUsers();
};

export {
  getAllUsersHandler,
  addUserHandler,
  deleteUserHandler,
  updateUserHandler,
};
