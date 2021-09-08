import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import { scrapeChannel } from "./scraping.js";
import Creator from "./creatorModel.js";

const app = express();
// YouTuber.com
// respond with "hello world" when a GET request is made to the homepage

const main = async () => {
  // const DB = process.env.DATABASE.replace(
  //   "<PASSWORD>",
  //   process.env.DATABASE_PASSWORD
  // );

  const DB = "mongodb://localhost/setup-v1";

  await mongoose.connect(DB);

  // eslint-disable-next-line no-console
  console.log("DB connection successful");

  // eslint-disable-next-line no-console
  console.log({ env: process.env.NODE_ENV });

  app.use(json());

  // Set Security Http headers
  app.use(helmet());

  app.use(cors({ origin: "http://localhost:3000" }));

  app.get("/creators", async function (req, res) {
    // const creators = [
    //   { name: "leo", image: "/leo.jpg" },
    //   { name: "leo", image: "/leo.jpg" },

    //   { name: "leo", image: "/leo.jpg" },
    // ];

    const creators = await Creator.find();
    res.send(creators);
  });

  app.post("/creators", async function (req, res) {
    console.log(req.body);
    const data = await scrapeChannel(req.body.url);

    const newCreator = await Creator.create({
      ...data,
      channelURL: req.body.url,
    });

    console.log({ newCreator });

    res.send(newCreator);
  });

  const port = 5000;
  app.listen(port, console.log("running at " + port));
};

main();
// mongoose.connect();

// middleware to add body object to the request object
