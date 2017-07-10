var express = require("express");

var quotesController = require("../controllers/quotesController");
var coursesController = require("../controllers/coursesController");
var lessonsController = require("../controllers/lessonsController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
router.post("/quotes", quotesController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);

// Get all courses (or optionally a specific course with an id)
router.get("/courses/:id?", coursesController.index);

// Create a new course using data passed in req.body
router.post("/courses", coursesController.create);

// Get all lessons (or optionally a specific course with an id)
router.get("/lessons/:id?", coursesController.index);


// Get all lessons (or optionally a specific course with an id)
router.get("/lessons/:id?", coursesController.index);

// Create a new lessons using data passed in req.body
router.post("/lessons", lessonsController.create);



module.exports = router;
