"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import { MongoClient } from "mongodb";
var app = express_1["default"]();
var port = process.env.PORT || 9000;
/*
const uri =
  "mongodb+srv://admin:ESlZYIXgEj5PJxGZ@cluster0.9zhdc.mongodb.net/flashcards-project?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
*/
/*
async function addFlashcard() {
  try {
    await client.connect();
    const database = client.db("flashcards-project");
    const users = database.collection("users");
  } finally {
    await client.close();
  }
}
*/
app.get("/", function (req, res) {
    res.status(200).send("Hello");
});
app.get("/add-flashcard", function (req, res) {
    // addFlashcard();
    res.status(200).send("Adding flashcard");
});
app.listen(port, function () { return console.log("listening on port: " + port); });
