const userRouter = require("express").Router();
const Auth = require("../models/auth");
const User = require("../models/user");

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
  const body = await request.body;

  const user = new User({
    addressline1: body.addressline1,
    addressline2: body.addressline2,
    bloodgroup: body.bloodgroup,
    city: body.city,
    district: body.district,
    dob: body.dob,
    gender: body.gender,
    homephone: body.homephone,
    mobilephone: body.mobilephone,
    nic: body.nic,
    province: body.province,
    userid: body.userid,
    usertype: body.usertype,
  });

  user
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

userRouter.get("/users", async (request, response, next) => {
  await User.find({ usertype: "USER" })
    .then((supports) => {
      response.json(supports);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = userRouter;
