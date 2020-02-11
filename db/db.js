const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

console.log("Hello", process.env.MONGODB_URL);

mongoose
  .connect(
    "mongodb+srv://brad1234:brad1234@contactkeeper-ty6y0.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
