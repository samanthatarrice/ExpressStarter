const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");

// Mongoose connect:
main().catch((err) =>
  console.log("There was an error connecting to Mongo:", err)
);

async function main() {
  // * Removed useCreateIndex and useFindAndModify bc it wasn't supported
  await mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongo connection open!");
}

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Serving YelpApp on port 3000");
});
