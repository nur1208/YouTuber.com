import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
var app = express();
// YouTuber.com
// respond with "hello world" when a GET request is made to the homepage

// middleware to add body object to the request object
app.use(json());

// Set Security Http headers
app.use(helmet());

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/creators", async function (req, res) {
  const creators = [
    { name: "leo", image: "/leo.jpg" },
    { name: "leo", image: "/leo.jpg" },

    { name: "leo", image: "/leo.jpg" },
  ];
  res.send(creators);
});

app.post("/creators", async function (req, res) {
  console.log(req.body);
  res.send("hello world");
});

const port = 5000;
app.listen(port, console.log("running at " + port));
