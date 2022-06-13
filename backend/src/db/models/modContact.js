const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    maxLength: 10,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  message: {
    type: String,
    required: true,
    min: 10,
  },
});

const contactModel = mongoose.model("Message", contactSchema);

module.exports = contactModel;
