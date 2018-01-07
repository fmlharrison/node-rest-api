const express = require("express");
const app = express();

// Here you import the controllers that you want your server to use.
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/orders");

// Here we declear the base routes that our controllers will be called from.
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
