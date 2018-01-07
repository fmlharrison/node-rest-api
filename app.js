const express = require("express");
const app = express();
// morgan is a logging middleware we use to log all of the incoming requests.
const log = require("morgan");
const bodyParser = require("body-parser");

// Here you import the controllers that you want your server to use.
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/orders");

// Use the morgan middlewear that funnels request to the routes that we want and logs everything.
app.use(log("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
// This extracts json data from requests and parsers them into the required model.
app.use(bodyParser.json());

// Here we declear the base routes that our controllers will be called from.
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Wrong routing error catching middlewear.
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  //This forwards the error request.
  next(error);
});

// Catch all error middlewear and return a response with error message.
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      meesage: error.message
    }
  });
});

module.exports = app;
