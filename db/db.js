const mongoose = require("mongoose");

console.log("Hello", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
