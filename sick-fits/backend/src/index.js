// let's go!
require("dotenv").config({ path: "variables.env" });

const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.start(
  {
    credentials: true,
    origin: process.env.PORT
  },
  deets => {
    console.log("Server is running...", deets);
  }
);
