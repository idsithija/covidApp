const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    vaccinename: {
      type: String,
    },
    vaccinedate: {
      type: String,
    },
    expireDate: {
      type: String,
    },
    vaccinedose: {
      type: String,
    },
  },
  { timestamps: true }
);

vaccineSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Vaccine", vaccineSchema);
