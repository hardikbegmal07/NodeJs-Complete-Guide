const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express!</h1>");
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html")); // __dirname: will point to current folder that is routes in which this file is currently in
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // but we want to open open shop.html which is inside views therefore we move one step back "../"
});

module.exports = router;
