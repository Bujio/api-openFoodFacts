const express = require("express");
const cors = require("cors");
const app = express();
const indexRoutes = require("../routes/index.routes");

app.use(cors());
app.use("/api/v1/", indexRoutes);

module.exports = app;
