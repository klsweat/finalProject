router.use(require('cookie-parser')())
router.use(require('body-parser').urlencoded({ extended: true }))
router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(function(email, pass, cb){
    var hashedPass = bCrypt.hashSync(pass)
    db.Employee.findOne({
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
    db.Employee.findById(id).then(function (user) {
        cb(null, user);
    });
});

passport.use(function(req, res, next){
    if(req.user){
        res.locals.user = req.user.email
    }
    next()
});

router.post("/signin/", passport.authenticate('local'), function(req, res) {
    console.log("Succesfully signed in.");
    res.redirect("/profile");
});

router.get('/signout/', function(req, res){
  req.logout();
  res.redirect('/');
});