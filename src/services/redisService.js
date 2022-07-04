// local dependencies
import {
  setValueToRedis,
  getValueFromRedis,
  connectRedis,
  closeConnectionToRedis,
} from "../helpers/redisHelpers.js";
import { sendResponse } from "../helpers/sendResponse.js";

const checkRedisHandler = async (event) => {
  try {
    await connectRedis();
    const cachedNameValue = await getValueFromRedis("name");
    await setValueToRedis("name", "JOe");
    await closeConnectionToRedis();
    const res = { message: "API endpoint reached", name: cachedNameValue };
    return sendResponse(process.env.SUCCESS_CODE, res);
  } catch (error) {
    return sendResponse(process.env.ERROR_CODE, { error: error.toString() });
  }
};

export { checkRedisHandler };
