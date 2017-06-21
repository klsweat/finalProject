const express = require('express');
var usersController = require("../../controllers/usersController");


const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});


router.get('/courses', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

// Get all users (or optionally a specific user with an id)
router.get("/api/user_data/:id?", usersController.index);

module.exports = router;
