// require('@babel/register');
require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const serverConfigServer = require("./config/serverConfigServer");
const indexRoutes = require("./routes/index.routes");

const app = express();
serverConfigServer(app);
// serverConfig(app);
app.use("/", indexRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App has been started in port ${PORT}...`);
});
