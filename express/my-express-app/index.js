const express = require("express");
const app = express();

app.get("/", (reg, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
