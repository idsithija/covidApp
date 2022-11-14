const authRouter = require("express").Router();
const Auth = require("../models/auth");
const bcrypt = require("bcrypt");
const config = require("../utils/config");
const nodemailer = require("nodemailer");

const { sign } = require("jsonwebtoken");

authRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  bcrypt.hash(body.password, 10).then((hash) => {
    const user = new Auth({
      username: body.username,
      password: hash,
      usertype: body.usertype,
      email: body.email,
      fullname: body.fullname,
    });

    user
      .save()
      .then((data) => {
        response.json(data);
        var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "asankasajini30@gmail.com",
            pass: "istyyfhtjcjdbqsh",
          },
        });

        var mailOptions = {
          from: "asankasajini30@gmail.com",
          to: body.email,
          subject: "Register",
          text: `You are Successfully Registered`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      })
      .catch((error) => next(error));
  });
});

authRouter.post("/login", async (request, response, next) => {
  try {
    const body = request.body;
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
