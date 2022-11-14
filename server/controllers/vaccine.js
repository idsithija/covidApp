const vaccineRouter = require("express").Router();
const Vaccine = require("../models/vaccine");
const Auth = require("../models/auth");
const nodemailer = require("nodemailer");

vaccineRouter.post("/", async (request, response, next) => {
  const body = await request.body;

  var date = new Date();
  date.setMonth(date.getMonth() + 7);
  var year = date.getFullYear();
  var mes = date.getMonth();
  var dia = date.getDate();
  var fecha2 = dia + "-" + mes + "-" + year;

  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 6;
  var dia = today.getDate();
  var fecha = dia + "-" + mes + "-" + year;

  const vaccine = new Vaccine({
    userid: body.userid,
    vaccinename: body.vaccinename,
    vaccinedate: fecha,
    expireDate: fecha2,
    vaccinedose: body.vaccinedose,
  });

  const user = await Auth.findOne({ _id: body.userid });

  vaccine
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
        to: user.email,
        subject: "Vaccine",
        text: `You are Successfully Vaccinated. You will need to vaccine next dose on ${fecha2}`,
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
