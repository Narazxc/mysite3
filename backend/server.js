require("dotenv").config();
const express = require("express");
const characterRoutes = require("./routes/characters");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { connectToDb, getDb } = require("./config/db");
const cors = require("cors");
// for parsing multipart/form-data
// const multer = require("multer");
// const upload = multer();

// int express app
const app = express();

// set up public dir
app.use("/public", express.static("public"));

// middlewares
// for parsing application/json
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    // origin: "http://localhost:3001",
  })
);

// for parsing multipart/form-data
// app.use(upload.array());

// for parsing application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
    limit: 100000,
  })
);

app.get("/", (req, res) => {
  res.json({ mssg: "Hello World" });
});

// routes
app.use("/api/favoritecharacters", characterRoutes);

// favoriteCharacters collection/table (old)
// connectToDb(() => {
//   // listen for request
//   app.listen(process.env.PORT, () => {
//     console.log(`⚆_⚆ & listening on port ${process.env.PORT}`);
//   });
// });

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "myanimesite",
  })
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`⚆_⚆ & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
