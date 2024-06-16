require("dotenv").config();

const config = {
  port: process.env.SERVER_PORT,
  server: process.env.SERVER_NAME
}

module.exports = config;
