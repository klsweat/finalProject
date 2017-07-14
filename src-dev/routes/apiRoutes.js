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
var userController = require("../controllers/userController");


var router = new express.Router();


router.use(require('cookie-parser')())
router.use(require('body-parser').urlencoded({ extended: true }))
router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy({usernameField: "email", passwordField:"password"}, function(email, password, cb){
    var hashedPass = bCrypt.hashSync(password)
    db.findOne({
        where: {
            email: email
        }
        }).then(function(user, err){
            if (err) { 
                return cb(err); 
            }
            if (!user) { 
                return cb(null, false); 
            }
            if (!bCrypt.compareSync(password, user.password)){ 
                return cb(null, false); 
            }
            return cb(null, user);
        })
}));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
    console.log("serializeUser")
});

passport.deserializeUser(function(id, cb) {
    db.findById(_id).then(function (user) {
        cb(null, user);
        console.log("findById", user)

    });
});

passport.use('login', function(req, res, next){
    if(req.user){
        res.locals.user = req.user.email
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
           
        })
        } else {
            res.send("user exists");
        }
    })
});






router.get("/signup", function(req, res){
    console.log("Successfully signed up.");
    res.json(req.user);
});

router.post("/login", passport.authenticate('local'), function(req, res) {
    console.log("Succesfully signed in.");
    res.json(req.user);
});


router.get("/user/:id?", userController.index);

router.get('/signout', function(req, res){
  req.logout();
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




//router.get("/api/isLogin/:id?", loginController.isLogin);





// Save Image
router.post("/file", fileController.create);
// Get Images
router.get("/file", fileController.index);



module.exports = router;
