const express = require("express");
const route = express.Router();

// Route for get all blog posts

route.get("/posts", (req, res) => {
  res.send("<h1>Hello</h1>");
});

module.exports = route;
