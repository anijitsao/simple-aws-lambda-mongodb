// local dependencies
import { setValue, getValue, connectRedis } from "../helpers/redisHelpers.js";
import { sendResponse } from "../helpers/sendResponse.js";

const checkRedisHandler = async (event) => {
  try {
    const res = { message: "API endpoint reached" };
    return sendResponse(process.env.SUCCESS_CODE, res);
  } catch (error) {
    return sendResponse(process.env.ERROR_CODE, { error: error.toString() });
  }
};

export { checkRedisHandler };
