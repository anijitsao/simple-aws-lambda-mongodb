import { sendResponse } from "../helpers/sendResponse.js";
export async function loginHandler(event) {
  const res = { msg: "service reached" };
  return sendResponse(process.env.SUCCESS_CODE, res);
}
