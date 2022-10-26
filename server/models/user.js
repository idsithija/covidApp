const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      default: null,
    },
    fullname: {
      type: String,
      default: null,
    },
    dob: {
      type: String,
      default: null,
    },
    nic: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      default: null,
    },
    bloodgroup: {
      type: String,
      default: null,
    },
    address1: {
      type: String,
      default: null,
    },
    address2: {
      type: String,
      default: null,
    },
    district: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    province: {
      type: String,
      default: null,
    },
    phonenumber: {
      type: String,
      default: null,
    },
    homenumber: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    usertype: { type: String, default: null },
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
