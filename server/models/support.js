const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  details: {
    type: String,
  },
  userid: {
    type: String,
  },
});

supportSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Support", supportSchema);
