const doctorsRouter = require("express").Router();
const Doctors = require("../models/doctors");

doctorsRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  const doctor = new Doctors({ ...body });

  doctor
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

doctorsRouter.get("/getDoctors", (request, response, next) => {
  Doctors.find({})
    .then((doctor) => {
      response.json(doctor);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = doctorsRouter;
