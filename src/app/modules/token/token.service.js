/* eslint-disable no-undef */
const createToken = require("../../helpers/createToken");

const createNewToken = async (user) => {
  const token = createToken(user, process.env.access_token_secret, "1h");
  return token;
};

const clearCookieToken = async () => {
  return "access_token";
};

module.exports.tokenService = {
  createNewToken,
  clearCookieToken,
};
