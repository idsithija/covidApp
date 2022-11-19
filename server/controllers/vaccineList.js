const vaccineListRouter = require("express").Router();
const VaccineList = require("../models/vaccineList");

vaccineListRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const vaccine = new VaccineList({ ...body });

  vaccine
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

vaccineListRouter.get("/getVaccineList", (request, response, next) => {
  VaccineList.find({})
    .then((vaccine) => {
      response.json(vaccine);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = vaccineListRouter;
