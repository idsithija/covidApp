const userRouter = require("express").Router();
const Auth = require("../models/auth");
const User = require("../models/user");
const { validateToken } = require("../utils/AuthMiddleware");

userRouter.post("/settings", async (request, response, next) => {
  try {
    const body = request.body;
    const user = await User.findOne({ userid: body.userid });
    if (user === null) {
      response.status(301).json("Please fill other the Settigs");
    } else {
      response.status(200);
    }
  } catch (err) {
    next(err);
  }
});

userRouter.post("/getSettings", async (request, response, next) => {
  try {
    const body = request.body;

    const user = await User.findOne({ userid: body.userid });
    const auth = await Auth.findOne({ _id: body.userid });
    if (user) {
      response.status(200).json({
        ...user._doc,
        email: auth.email,
        fullname: auth.fullname,
      });
    }
  } catch (err) {
    next(err);
  }
});

userRouter.post("/adddetailes/:id", async (request, response, next) => {
  const body = request.body;

  await new User({
    ...body,
  })
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

module.exports = userRouter;
