const express = require("express");
const router = express.Router();

const Rating = require("../models/Rating");

//Get back all the drops
router.get("/", async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a post
router.post("/", async (req, res) => {
  console.log(req.body);
  const ratings = new Rating({
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const savedRating = await ratings.save();
    res.json(savedRating);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific post
router.get("/:ratingId", async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.ratingId);
    res.json(rating);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post
router.delete("/:ratingId", async (req, res) => {
  try {
    const removedRating = await Rating.remove({ _id: req.params.ratingId });
    res.json(removedRating);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a list
router.patch("/:ratingId", async (req, res) => {
  try {
    const id = req.params.ratingId;
    const updates = req.body;
    const options = {new: true}
    
    const result = await Rating.findByIdAndUpdate(id, updates, options);

    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});



module.exports = router;
