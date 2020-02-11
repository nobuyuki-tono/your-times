const express = require("express");

const route = require("./routes/post");
require("./db/db");

const app = express();

app.use(express.json());

app.use(route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Suerver is running on port ${PORT}`);
});
