const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sizes: {
    type: Array,
    required: true
  },
  price: {
    type:Number,
    required: true
  },
  count: {
    type: Number,
    required:true
  }
});

module.exports = mongoose.model("Lists", ListSchema);
