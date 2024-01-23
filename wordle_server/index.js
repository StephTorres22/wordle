import "dotenv/config"; //this is how you use .env files and dotenv using es6 modules
import mongoose from "mongoose";
import { Word } from "./models/wordModel.js";
import { getRandomWord } from "./getRandomWord.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); //need this to handle axios post requests!
const todaysTargetWord = runAtSpecificTimeOfDay(0, 0, getRandomWord);
function runAtSpecificTimeOfDay(hour, minutes, func) {
  const twentyFourHours = 86400000;
  const now = new Date();
  let eta_ms =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minutes,
      0,
      0
    ).getTime() - now;
  if (eta_ms < 0) {
    eta_ms += twentyFourHours;
  }
  setTimeout(function () {
    //run once
    func();
    // run every 24 hours from now on
    setInterval(func, twentyFourHours);
  }, eta_ms);
}

app.post("/", async (request, response) => {
  try {
    const userGuess = request.body.word;
    /* Shouldn't get here as have a client validation on the form */
    if (request.body.word.length > 5) {
      return response.status(400).send({ message: "Word is too short" });
    }

    console.log(userGuess);
    return response.status(200).send(`Recieved ${userGuess}`);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message, request });
  }
});

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
