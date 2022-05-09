import express from "express";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("hello mate");
});

app.listen(port, function () {
  console.log("hello world");
});
