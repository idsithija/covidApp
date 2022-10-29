const supportRouter = require("express").Router();
const Support = require("../models/support");

supportRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const support = new Support({ ...body });

  support
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

supportRouter.get("/getSupport", (request, response, next) => {
  Support.find({})
    .then((supports) => {
      response.json(supports);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = supportRouter;
