const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const landingRoutes = require("./routes/landing-routes");
const loadRoutes = require("./routes/loads-routes");
const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(landingRoutes);
app.use("/api/loads", loadRoutes);
app.use("/api/users", userRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  // Checks if response is already sent
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error" });
});

mongoose
  .connect(
    "mongodb+srv://load-dispatch-user:load1234@cluster0.q13yfea.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .catch((err) => {
    console.log(error);
  });
