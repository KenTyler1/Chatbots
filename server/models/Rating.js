const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  rating: {
    type: Number,
  },
  comment: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("Rating", ListSchema);
