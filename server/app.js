// require('@babel/register');
require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const serverConfigServer = require("./config/serverConfigServer");

const app = express();
serverConfigServer(app) && serverConfig(app);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App has been started in port ${PORT}...`);
});
