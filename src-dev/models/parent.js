var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var parentSchema = new Schema({
  parent_course_name: {
    type: String
  }
});

var Parents = mongoose.model("Parents", parentSchema);

module.exports = Parents;