const express = require("express");
const router = express.Router();
const { getDb: db } = require("../config/db");
const multer = require("multer");

const {
  getCharacters,
  createCharacter,
  getCharacter,
  deleteCharater,
} = require("../controllers/favoriteCharacterController");

const filePath = "/public/images/";
const myFileName = Date.now() + "_";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "." + filePath);
  },

  filename: (req, file, cb) => {
    cb(null, myFileName + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

// router.get("/", (req, res) => {
//   let favChar = [];
//   // res.json({ msg: "favoritecharacters" });
//   db()
//     .collection("favoriteCharacters")
//     .find()
//     .forEach((char) => favChar.push(char))
//     .then(() => {
//       res.status(200).json(favChar);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch the doc" });
//     });
// });

// router.post("/characters", upload.array("pic[]", 5), (req, res) => {
//   // const { pic, anime, name, backgroundStory } = req.body;

//   console.log(req.files);
//   console.log(req.body);

//   // reconstruct data
//   const charData = { ...req.body, pic: [] };

//   req.files.forEach((file) => {
//     charData.pic.push(filePath + myFileName + file.originalname);
//   });

//   console.log(charData);
//   // res.json({ msg: "submitted", charData });
//   db()
//     .collection("favoriteCharacters")
//     .insertOne(charData)
//     .then((result) => {
//       res.status(201).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json({ err: "Could not create a new document" });
//     });
//   // // console.log(db);
//   // res.json({ pic, anime, name, backgroundStory });
// });

// router.delete("/characters/:id", (req, res) => {
//   postId = req.params.id;

//   // res.json({ msg: `From server: ${postId} successfully deleted` });
//   // return;
//   db()
//     .collection("favoriteCharacters")
//     .deleteOne({ _id: new mongoose.mongo.ObjectId(postId) })
//     .then((result) => {
//       res.status(201).json({ msg: `${postId} delete successfully` });
//     })
//     .catch((err) => {
//       res.status(500).json({ err: "Could not create a new document" });
//     });
// });

router.get("/", getCharacters);

router.post("/", upload.array("pics[]", 5), createCharacter);

router.get("/:id", getCharacter);

router.delete("/:id", deleteCharater);

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE route works", param: req.params });
});

module.exports = router;
