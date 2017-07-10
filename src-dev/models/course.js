var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var coursesSchema = new Schema({
  course_name: String,
  is_parent: {
    type: Boolean,
    default: false
  },
  parent_id: {
    type: String
  },
  start_date: {
    type: Date,
  },
  body: {
    type: String
  },
  status: {
    type: String,
    default: "Incomplete"
  },
  subcourse: {
    type: String
  }
  // This only saves one Form_Id's objectid, ref referse to the forms model
 // parent_id: {
 // type: Schema.Types.ObjectId,
//  ref: "parent"
 //}
});

var Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;