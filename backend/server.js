const express = require("express");
const characterRoutes = require("./routes/characters");
const morgan = require("morgan");

// express app
const app = express();

// middleware
app.use(morgan("dev"));

// routes
app.use("/api/favoritecharacters", characterRoutes);

app.listen(3020, () => console.log("server is running on port 3020"));
