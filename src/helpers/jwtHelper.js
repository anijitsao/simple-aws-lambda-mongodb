// NPM dependencies
import jwt from "jsonwebtoken";

import { sendResponse } from "./sendResponse.js";

// extract the token methods
const { sign, verify } = jwt;

// create token from the payload
const createToken = (payload) => {
  const token = sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
  });

  return token;
};

export { createToken };
