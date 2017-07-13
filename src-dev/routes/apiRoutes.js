var express = require("express");
var path = require("path");
var passport = require('passport');
var db = require('../models/user');
var express = require("express");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

//var quotesController = require("../controllers/quotesController");
var coursesController = require("../controllers/coursesController");
var lessonsController = require("../controllers/lessonsController");
var fileController = require("../controllers/fileController");


var router = new express.Router();


router.use(require('cookie-parser')())
router.use(require('body-parser').urlencoded({ extended: true }))
router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

router.use(passport.initialize());
router.use(passport.session());



passport.use('login', new LocalStrategy(function(username, pass, cb){
    var hashedPass = bCrypt.hashSync(pass)
    db.findOne({
        where: {
            email: username
        }
        }).then(function(user, err){
            if (err) { 
                return cb(err); 
            }
            if (!user) { 
                return cb(null, false); 
            }
            if (!bCrypt.compareSync(pass, user.password)){ 
                return cb(null, false); 
            }
            return cb(null, user);
        })
}));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.findById(id).then(function (user) {
        cb(null, user);
    });
});

passport.use('login', function(req, res, next){
    if(req.user){
        res.locals.user = req.user.username
    }
    next()
});

router.post("/signup", function(req, res, next){
    db.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user){
        if(!user){
        db.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bCrypt.hashSync(req.body.password)
        }).then(function(user){
            passport.authenticate("local", {failureRedirect:"/signup", successRedirect: "/signup"})(req, res, next)
            return (null, user);
        })
        } else {
            res.send("user exists");
        }
    })
});

router.get("/signup", function(req, res){
    console.log("Successfully signed up.");
    res.redirect("/home");
});

router.post("/login", passport.authenticate('local'), function(req, res) {
    console.log("Succesfully signed in.");

    res.redirect("/dashboard");
});

router.get('/signout', function(req, res){
  req.logout();
  res.redirect('/');
});


// Get all courses (or optionally a specific course with an id)
router.get("/courses/:id?", coursesController.index);

// Get all courses (or optionally a specific course with an id)
router.get("/courses/true", coursesController.true);

// Get all courses (or optionally a specific course with an id)
router.get("/courses/:id?", coursesController.index);


// Create a new course using data passed in req.body
router.post("/courses", coursesController.create);

// Create a new course using data passed in req.body
router.patch("/courses/:id?", coursesController.update);

// Get all parent courses assigned to user
router.get("/parentcourses/", coursesController.parent);

// Get all lessons that correspond with a parent course id and user_id
router.get("/lessons/:id?", lessonsController.lessons);

// Get all lessons that correspond with a parent course id and user_id
router.get("/lessons/content/:id?", lessonsController.content);



// Get all quotes (or optionally a specific quote with an id)
//router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
//router.post("/quotes", quotesController.create);
// Update an existing quote with a speicified id param, using data in req.body//
//router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
//router.delete("/quotes/:id", quotesController.destroy);



// Get all lessons (or optionally a specific course with an id)
//router.get("/lessons/:id?", coursesController.index);

// Create a new lessons using data passed in req.body
//router.post("/lessons", lessonsController.create);


// Save Image
router.post("/file", fileController.create);
// Get Images
router.get("/file", fileController.index);



module.exports = router;
