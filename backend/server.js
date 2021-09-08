import express, { json } from "express";
import helmet from "helmet";

var app = express();
// YouTuber.com
// respond with "hello world" when a GET request is made to the homepage

// middleware to add body object to the request object
app.use(json());

// Set Security Http headers
app.use(helmet());

app.get("/creators", async function (req, res) {
  const creators = [
    { name: "leo", img: "/leo.jpg" },
    { name: "leo", img: "/leo.jpg" },

    { name: "leo", img: "/leo.jpg" },
  ];
  res.send(creators);
});

app.post("/creators", async function (req, res) {
  res.send("hello world");
});

const port = 5000;
app.listen(port, console.log("running at " + port));
