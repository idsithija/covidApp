const authRouter = require("express").Router();
const auth = require("../models/auth");

authRouter.post("/", (request, response, next) => {
  const body = request.body;

  const user = new auth({
    name: body.name,
    password: body.password,
    usertype: body.usertype,
    date: new Date(),
  });

  user
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

module.exports = authRouter;
