const express = require("express");

const post = require("./routes/post");
require("./db/db");

const app = express();

app.use(express.json());

app.use(post);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Suerver is running on port ${PORT}`);
});
