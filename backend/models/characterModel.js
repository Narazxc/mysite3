const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    anime: {
      type: String,
      required: true,
    },
    backgroundStory: {
      type: String,
      required: true,
    },
    pics: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("favoritecharacters", characterSchema);
