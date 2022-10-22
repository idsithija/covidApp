const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: String,
  password: String,
  usertype: String,
  date: String,
});

authSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("auth", authSchema);
