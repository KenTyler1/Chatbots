const express = require("express");
const router = express.Router();

const Lists = require("../models/List");

//Get back all the drops
router.get("/", async (req, res) => {
  try {
    const lists = await Lists.find();
    res.json(lists);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a post
router.post("/", async (req, res) => {
  console.log(req.body);
  const lists = new Lists({
    title: req.body.title,
    images: req.body.images,
    description: req.body.description,
    content: req.body.content,
    sizes: req.body.sizes,
    price: req.body.price,
    count: req.body.count,
  });
  try {
    const savedList = await lists.save();
    res.json(savedList);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific post
router.get("/:listId", async (req, res) => {
  try {
    const list = await Lists.findById(req.params.listId);
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete post
router.delete("/:listId", async (req, res) => {
  try {
    const removedList = await Lists.remove({ _id: req.params.listId });
    res.json(removedList);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a list
router.patch("/:listId", async (req, res) => {
  try {
    const updatedList = await Lists.updateOne(
      { _id: req.params.listId },
      { $set: { title: req.body.title } },
      { $set: { images: req.body.images} },
      { $set: { description: req.body.description } },
      { $set: { content: req.body.content } },
      { $set: { price: req.body.price } },
      { $set: { count: req.body.count } },
    );
    res.json(updatedList);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/specificed" ,(req,res) => {
//     res.send("<h1>Post specificied</h1>")
// });

module.exports = router;
