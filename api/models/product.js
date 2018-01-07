// This is where we declare the schema for a product model in the DB
const mongoose = require("mongoose");

// Product schema with properties an types
const product = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  price: Number
});

// Here were export the schema as a model that our controllers can use.
module.exports = mongoose.model("Product", product);
