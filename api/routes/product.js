// This is our products controller, where we add the HTTP methods that we want our API to be able to go.

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  const product = {
    name: body.name,
    price: body.price
  };
  res.status(201).json({
    message: "Handling POST requests to /products",
    product: product
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "That's a bingo. You have won!"
    });
  } else {
    res.status(200).json({
      meesage: "You passed the id of " + id + "."
    });
  }
});

router.post("/:productId", (req, res, next) => {
  res.status(201).json({
    message: `Added product ${req.params.productId}`
  });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: `Updated product ${req.params.productId}`
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: `Deleted product ${req.params.productId}`
  });
});

module.exports = router;
