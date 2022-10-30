const vaccineRouter = require("express").Router();
const Vaccine = require("../models/vaccine");

vaccineRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  var date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  var year = date.getFullYear();
  var mes = date.getMonth() + 1;
  var dia = date.getDate();
  var fecha2 = dia + "-" + mes + "-" + year;

  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();
  var fecha = dia + "-" + mes + "-" + year;

  const vaccine = new Vaccine({
    userid: body.userid,
    vaccinename: body.vaccinename,
    vaccinedate: fecha,
    expireDate: fecha2,
    vaccinedose: body.vaccinedose,
  });

  vaccine
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => next(error));
});

vaccineRouter.get("/user/:id", async (request, response, next) => {
  await Vaccine.find({ userid: request.params.id })
    .then((vaccines) => {
      response.json(vaccines);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = vaccineRouter;
