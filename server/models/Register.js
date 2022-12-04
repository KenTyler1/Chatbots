const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
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
