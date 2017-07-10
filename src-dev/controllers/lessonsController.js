var Lesson = require('../models/course')

module.exports = {
  // This method handles retrieving lessons from the db
  lessons: function (req, res) {
    //console.log(req.params.id)
    Lesson.find({parent_id: req.params.id})
      .then(function (doc) {
        res.json(doc)
      }).catch(function (err) {
      res.json(err)
    })
  },

  // This method handles retrieving lessons from the db
  content: function (req, res) {
    console.log(req.params.id)

    Lesson.find({_id: req.params.id})
      .then(function (doc) {
        res.json(doc)
      }).catch(function (err) {
      res.json(err)
    })
  }

}
