const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
const bodyParser = require("body-parser");

HTTP_SERVER.use(cors());
HTTP_SERVER.use(bodyParser.json());
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;
HTTP_SERVER.listen(port,'0.0.0.0',()=>{
    console.log("server start in this port",port);
})

HTTP_SERVER.use('/',require("./app"))