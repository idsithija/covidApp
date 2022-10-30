const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
      unique: true,
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
    addressline1: {
      type: String,
    },
    addressline2: {
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
    mobilephone: {
      type: String,
    },
    homephone: {
      type: String,
    },
    usertype: {
      type: String,
    },
    fullname: {
      type: String,
    },
    username: {
      type: String,
    },
    age: {
      type: String,
    },
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
