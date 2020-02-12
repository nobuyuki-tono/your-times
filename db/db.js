const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

console.log("Hello", process.env.MONGODB_URL);

mongoose
  .connect({ useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
