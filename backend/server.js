var express = require("express");
var app = express();
// YouTuber.com
// respond with "hello world" when a GET request is made to the homepage
app.get("/creators", async function (req, res) {
  res.send("hello world");
});

app.post("/creators", async function (req, res) {
  res.send("hello world");
});

const port = 5000;
app.listen(port, console.log("run at " + port));
