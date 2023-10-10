const express = require("express");
const bodyParser = require("body-parser");

const landingRoutes = require("./routes/landing-routes");
const loadRoutes = require("./routes/loads-routes");
const userRoutes = require("./routes/users-routes");

const app = express();

app.use(landingRoutes);
app.use("/api/loads", loadRoutes);
app.use("/api/users", userRoutes);

app.use((error, req, res, next) => {
  // Checks if response is already sent
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500).json({message: error.message || "An unknown error"});
});

app.listen(5000);
