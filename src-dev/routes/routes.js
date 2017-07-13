var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");
var fs = require('fs');


var router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../html.html"));
});


//router.get('*', function(req, res) {
//  fs.readFile("template.html", function (err, content) {
//    res.send(content.toString());
//  });
//});


module.exports = router;
