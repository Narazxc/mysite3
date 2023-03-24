const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "favoritecharacters" });
});

router.post("/", (req, res) => {
  //   const { pic, anime, name, backgroundStory } = req.body;
  res.json({ msg: "create a favorite character card" });
});

module.exports = router;
