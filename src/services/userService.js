// local dependencies
import {
  getAllUsers,
  addUserToDB,
  deleteUserFromDB,
  updateUserToDB,
} from "../dbRelated/userdbOps.js";

const getAllUsersHandler = async (event) => {
  return getAllUsers();
};

const addUserHandler = async (event) => {
  return addUserToDB();
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
