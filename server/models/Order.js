const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  obe: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Registers", ListSchema);
