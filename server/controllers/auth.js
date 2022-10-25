const authRouter = require("express").Router();
const Auth = require("../models/auth");
const bcrypt = require("bcrypt");
const config = require("../utils/config");

const { sign } = require("jsonwebtoken");

authRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  bcrypt.hash(body.password, 10).then((hash) => {
    const user = new Auth({
      username: body.username,
      password: hash,
      usertype: body.usertype,
    });

    user
      .save()
      .then((data) => {
        response.json(data);
      })
      .catch((error) => next(error));
  });
});

authRouter.post("/login", async (request, response, next) => {
  try {
    const body = await request.body;
    const user = await Auth.findOne({ username: body.username });

    if (!user) response.status(401).json({ error: "Username Doesn't Exist" });

    if (user) {
      bcrypt.compare(body.password, user.password).then((match) => {
        if (!match)
          response.status(401).json({ error: "Wrong Username or Password" });

        if (match) {
          const accessToken = sign(
            { username: user.username, id: user._id },
            config.SECRET_CODE
          );

          response.json({
            token: accessToken,
            username: user.username,
            id: user._id,
            usertype: user.usertype,
          });
        }
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = authRouter;
