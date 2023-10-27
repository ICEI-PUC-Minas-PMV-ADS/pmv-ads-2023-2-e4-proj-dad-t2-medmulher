const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  /*address: {
    street: {
      type: String,
      required: true,
      min: 3,
    },
    district: {
      type: String,
      required: true,
      min: 3,
    },
    city: {
      type: String,
      required: true,
      min: 2,
    },
    complement: {
      type: String,
    },
    number: {
      type: Number,
      min: 1,
    },
    postal_code: {
      type: String,
      min: 8,
      max: 9,
    },
  },*/
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    min: 11,
    max: 14,
  },
  create_date: Date,
  updated_user_date: Date,
});

module.exports = mongoose.model("Users", userSchema);
