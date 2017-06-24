var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var formsSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  // This only saves one Form_Id's objectid, ref referse to the forms model
  form_id: {
    type: Schema.Types.ObjectId,
    ref: "forms"
  }
});

var Forms = mongoose.model("Forms", formsSchema);

module.exports = Forms;