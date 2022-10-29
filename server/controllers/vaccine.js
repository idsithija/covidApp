const vaccineRouter = require("express").Router();
const Vaccine = require("../models/vaccine");

vaccineRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const user = new Auth({ ...body });

  user
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

module.exports = vaccineRouter;
