// local dependencies
import { createToken } from "../helpers/jwtHelper.js";
import { sendResponse } from "../helpers/sendResponse.js";

export async function loginHandler(event) {
  const payload = event.body && JSON.parse(event.body);
  try {
    if (!payload) {
      return sendResponse(process.env.ERROR_FORBIDDEN_CODE, {
        message: "No payload found",
      });
    }
    const token = createToken(payload);
    const res = { msg: "login successful" };
    return sendResponse(process.env.SUCCESS_CODE, res, token);
  } catch (error) {
    return sendResponse(process.env.ERROR_CODE, { error: error.toString() });
  }
}
