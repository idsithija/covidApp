const monogoose = require("mongoose");

const diseaseSchema = new monogoose.Schema({
  diseasename: {
    type: String,
  },
  count: {
    type: String,
  },
  location: {
    type: String,
  },
  userid: {
    type: String,
  },
});

diseaseSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = monogoose.model("Disease", diseaseSchema);
