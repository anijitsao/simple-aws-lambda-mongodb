// NPM dependencies
import jwt from "jsonwebtoken";

import { sendResponse } from "./sendResponse.js";

// extract the token methods
const { sign, verify } = jwt;

// create token from the payload
const createToken = (payload) => {
  const token = sign(
    { ...payload, appName: process.env.APP_NAME },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
    }
  );

  return token;
};

const verifyToken = (event) => {
  const token = extractToken(event);
  try {
    const decoded = verify(token, process.env.JWT_SECRET);

    // if the token has the correct data it is passed
    if (decoded.appName === process.env.APP_NAME) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const extractToken = (event) => {
  const { headers } = event;
  const tokenExtracted = headers.authorization
    ? headers.authorization.replace("Bearer ", "")
    : "";

  return tokenExtracted;
};

export { createToken, verifyToken };
