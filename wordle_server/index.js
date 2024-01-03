import "dotenv/config"; //this is how you use .env files and dotenv using es6 modules
import mongoose from "mongoose";
import { Word } from "./models/wordModel.js";
import { getRandomWord } from "./getRandomWord.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/", async (req, res) => {
  const todaysDate = new Date().toDateString();
  try {
    let todaysWord;
    const newTargetWord = {
      word: await getRandomWord(),
      dateUsed: new Date().toDateString(),
    };

    if (
      (await Word.find({ dateUsed: todaysDate })) == 0 &&
      (await Word.find({ word: newTargetWord.word })) == 0
    ) {
      /* everything is being sent to test, need to find a way to change that */
      todaysWord = await Word.create(newTargetWord);
    } else {
      todaysWord = await Word.find({ dateUsed: todaysDate });
    }
    return res.status(201).send(todaysWord);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGODB, { dbName: "wordle_words" })
  .then(() => {
    console.log("Connected to Words database");
    app.listen(port, () => {
      console.log(`Apps on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
