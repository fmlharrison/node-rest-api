// This is our products controller, where we add the HTTP methods that we want our API to be able to go.

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then(products => {
      console.log(products);
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// POST product data and create entry in the DB
router.post("/", (req, res, next) => {
  const body = req.body;
  // Create the Product model mapped from the request body
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: body.name,
    price: body.price
  });

  // Save the created model in the DB and log any errors
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Product created.",
        product: product
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// GET product by ID.
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  // Use static method to get the product from the DB by Id.
  Product.findById(id)
    .exec()
    .then(product => {
      console.log("From database", product);
      if (!product) {
        res.status(404).json({
          message: "Not entry found for provided ID."
        });
      }
      res.status(200).json(product);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;

  // A static method that deletes an entry by condition, here we are doing it by ID.
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
