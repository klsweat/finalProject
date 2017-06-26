var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  course_name: String,
  body: {
    type: String
  },
  editing: {
    type: Boolean,
    default: false
  },
  parent: {
    type: Boolean,
    default: false
  },
  start_date: {
    type: Date,
    default: Date.now
  },
  // This only saves one's parent's objectid, ref referse to the course model
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: "course"
  }
});

var Lessons = mongoose.model("Lessons", lessonSchema);

module.exports = Lessons;