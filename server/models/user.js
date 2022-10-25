const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    fullname: {
      type: String,
    },
    dob: {
      type: String,
    },
    nic: {
      type: String,
    },
    gender: {
      type: String,
    },
    bloodgroup: {
      type: String,
    },
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    district: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    homenumber: {
      type: String,
    },
    email: {
      type: String,
    },
    usertype: String,
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("User", userSchema);
