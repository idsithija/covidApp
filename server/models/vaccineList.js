const mongoose = require("mongoose");

const vaccineListSchema = new mongoose.Schema(
  {
    vaccinename: {
      type: String,
    },
    province: {
      type: String,
    },
    expireDate: {
      type: String,
    },
    count: {
      type: String,
    },
  },
  { timestamps: true }
);

vaccineListSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("VaccineList", vaccineListSchema);
