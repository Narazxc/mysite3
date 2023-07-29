const Character = require("../models/characterModel");
const mongoose = require("mongoose");
const slugify = require("slugify");

const getCharacters = async (req, res) => {
  const characters = await Character.find({}).sort({ createAt: -1 });

  res.status(200).json(characters);
};

const createCharacter = async (req, res) => {
  //   const { name, anime, backgroundStory, pics } = req.body;
  const filePath = "/public/images/";

  //   console.log(req.body);
  //   console.log(req.files);
  //   res.json(req.body);

  // reconstruct data
  const charData = { ...req.body, pics: [] };
  charData.slug = slugify(charData.name, { lower: true });

  req.files.forEach((file) => {
    charData.pics.push(filePath + file.filename);
  });

  // console.log(charData);
  // res.json(charData);

  // add doc to db
  try {
    const character = await Character.create({
      ...charData,
    });
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such character" });
  }

  const character = await Character.findById(id);
  if (!character) {
    return res.status(404).json({ error: "No such character" });
  }

  res.status(200).json(character);
};

const deleteCharater = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const character = await Character.findOne({ slug: id });
  } else {
    res.status(404).json({ error: "No such workout" });
  }

  const character = await Character.findOneAndDelete({ _id: id });

  if (!character) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(character);
};

module.exports = {
  getCharacters,
  createCharacter,
  getCharacter,
  deleteCharater,
};
