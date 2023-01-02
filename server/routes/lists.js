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
    time: req.body.time,
    age: req.body.age,
    phone: req.body.phone,
    ticket: req.body.ticket,
    tour: req.body.tour
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
    const id = req.params.listId;
    const updates = req.body;
    const options = {new: true}
    
    const result = await Lists.findByIdAndUpdate(id, updates, options);

    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:listId", async (req, res) => {
  try {
    const id = req.params.listId;
    const updates = req.body;
    const options = {new: true}
    
    const result = await Lists.findByIdAndUpdate(id, updates, options);

    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});




module.exports = router;
