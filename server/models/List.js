const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [String],
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
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required:true
  },
  time: {
    type: String
  },
  age: {
    type: String
  },
  phone: {
    type: String
  },
  ticket: {
    type: String
  },
  tour: {
    type: String
  }
});

module.exports = mongoose.model("Lists", ListSchema);
