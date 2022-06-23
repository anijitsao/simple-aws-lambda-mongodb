// local dependencies
import { createToken } from "../helpers/jwtHelper.js";
import { sendResponse } from "../helpers/sendResponse.js";
import { findUserFromDb } from "../dbRelated/logindDbOps.js";

export async function loginHandler(event) {
  const payload = event.body && JSON.parse(event.body);
  try {
    // if payload is not present
    if (!payload || !payload.username) {
      return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
        message: "No payload found",
      });
    }

    // if payload contains a valid username
    const userInfo = await findUserFromDb(payload);

    // create token if a valid user found
    const token = createToken(payload);

    // send the  response
    const res = { msg: "login successful" };
    return sendResponse(process.env.SUCCESS_CODE, res, token);
  } catch (error) {
    return sendResponse(process.env.ERROR_CODE, { error: error.toString() });
  }
}
