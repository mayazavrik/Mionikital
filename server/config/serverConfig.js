const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const indexRoutes = require("../routes/index.routes");
const sessionConfig = require("./sessionConfig");

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/", indexRoutes);
};

module.exports = serverConfig;
