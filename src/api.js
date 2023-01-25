const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/test", (req, res) => {
  res.send("Hello world test");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
