const express = require("express");
const cors = require("cors");

const post = require("./routes/post");
require("./db/db");

const app = express();

app.use(express.json());
app.use(cors());

app.use(post);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Suerver is running on port ${PORT}`);
});
