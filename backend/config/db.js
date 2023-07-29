const mongoose = require("mongoose");
require("dotenv").config();
const util = require("util");

let dbConnection;

module.exports = {
  // initially connect to the database or establish a connection to db
  connectToDb: (cb) => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "myanimesite",
      })
      .then((MongoClient) => {
        dbConnection = MongoClient;
        return cb();
      })
      .catch((error) => {
        console.log(error);
        return cb(error);
      });
  },

  // return our database connection after we've already connected to it
  // that database connection will allow us to communicate with the database
  getDb: () => dbConnection.connection.db,
};
