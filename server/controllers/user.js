const userRouter = require("express").Router();
const User = require("../models/user");
const { validateToken } = require("../utils/AuthMiddleware");

userRouter.post("/settings", async (request, response, next) => {
  const body = request.body;
  const user = await User.findOne({ username: body.username });
  console.log(user);
  if (user.nic === null) {
    response.status(301).json("Please fill other the Settigs");
  } else {
    response.status(200);
  }
});

module.exports = userRouter;
