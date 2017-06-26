/**
 * A very simple webserver/express setup.
 * It does the following:
 * - listens to port 3000 and returns our template.html on /
 * - maps /js to our /dist folder
 * - maps /css to the css folder in the css folder of the react-content-builder module
 *  (In production you would want to copy the css files into your css folder of your own project)
 */

var express = require('express');
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var fs = require('fs');
var routes = require("./routes/routes");


mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use('/js', express.static('dist'));
app.use('/css', express.static(__dirname + '/node_modules/react-content-builder/css/'));

app.use("/", routes);


var db = process.env.MONGODB_URI || "mongodb://localhost/lms";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});


var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});