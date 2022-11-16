const locationsRouter = require("express").Router();
const Locations = require("../models/location");

locationsRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const location = new Locations({ ...body });

  location
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

locationsRouter.get("/getLocations", (request, response, next) => {
  Locations.find({})
    .then((location) => {
      response.json(location);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = locationsRouter;
