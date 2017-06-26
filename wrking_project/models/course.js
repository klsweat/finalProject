var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var coursesSchema = new Schema({
  course_name: String,
  parent: {
    type: Boolean,
    default: false
  },
  start_date: {
    type: Date,
    default: Date.now
  }
  // This only saves one Form_Id's objectid, ref referse to the forms model
  //form_id: {
  //  type: Schema.Types.ObjectId,
  //  ref: "Form_Id"
 // }
});

var Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;