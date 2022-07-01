// local dep
import { sendResponse } from "../helpers/sendResponse.js";
const checkRedisHandler = async (event) => {
  const res = { message: "API endpoint reached" };
  sendResponse(process.env.SUCCESS_CODE, res);
};

export { checkRedisHandler };
