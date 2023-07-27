const express = require("express");
const APP_SERVER = express();

APP_SERVER.use('/files',require('./controller/files.controller'));

module.exports = APP_SERVER;