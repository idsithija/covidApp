const diseaseRouter = require("express").Router();
const Disease = require("../models/disease");

diseaseRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const disease = new Disease({ ...body });

  disease
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

diseaseRouter.get("/getDisease", (request, response, next) => {
  Disease.find({})
    .then((diseases) => {
      response.json(diseases);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = diseaseRouter;
