const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    doctorname: {
      type: String,
      required: true,
      unique: true,
    },
    illness: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    usertype: String,
  },
  { timestamps: true }
);

doctorSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Doctors", doctorSchema);
