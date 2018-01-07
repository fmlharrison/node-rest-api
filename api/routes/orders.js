// This is our orders controller, where we add the HTTP methods that we want our API to be able to go.

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched"
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Orders were created."
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: "Order details.",
    orderId: id
  });
});

router.post("/:orderId", (req, res, next) => {
  res.status(201).json({
    message: `Added order ${req.params.orderId}`
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Updated order ${req.params.orderId}`
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Deleted order ${req.params.orderId}`
  });
});

module.exports = router;
