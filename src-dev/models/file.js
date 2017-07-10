var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var fileSchema = new Schema({
 name: String, data: String, contentType: String, version: Number

  // This only saves one Form_Id's objectid, ref referse to the forms model
  //form_id: {
  //  type: Schema.Types.ObjectId,
  //  ref: "Form_Id"
 // }
});

var Files = mongoose.model("Files", fileSchema);

module.exports = Files;