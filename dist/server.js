const express = require("express");
const path = require("path");
const port = 5000;
const app = express();

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/../src/index.js"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(port, (request, response) => {
  console.log(
    "running server on port " + port + " and the dirname is " + __dirname
  );
});
