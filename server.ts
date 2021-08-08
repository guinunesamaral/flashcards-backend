import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 9000;
const uri =
  "mongodb+srv://admin:ESlZYIXgEj5PJxGZ@cluster0.9zhdc.mongodb.net/flashcards-project?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function addFlashcard() {
  try {
    await client.connect();
    const database = client.db("flashcards-project");
    const users = database.collection("users");
  } finally {
    await client.close();
  }
}

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/add-flashcard", (req, res) => {
  addFlashcard();
  res.status(200).send("Adding flashcard");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
