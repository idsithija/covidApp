const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const middleware = require("./utils/midddleware");
const authRouter = require("./controllers/auth");
const userRouter = require("./controllers/user");
const vaccineRouter = require("./controllers/vaccine");
const diseaseRouter = require("./controllers/disease");

mongoose
  .connect(config.MONGOOSE_URL)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("error connecting to MongoDB", err);
  });

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(middleware.requestLogger);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/vaccine", vaccineRouter);
app.use("/api/disease", diseaseRouter);

module.exports = app;
