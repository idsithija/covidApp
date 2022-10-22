require("dotenv").config();

const PORT = process.env.PORT;
const MONGOOSE_URL = process.env.MONGOOSE_URL;
const SECRET_CODE = process.env.SECRET_CODE;

module.exports = {
  PORT,
  MONGOOSE_URL,
  SECRET_CODE,
};
