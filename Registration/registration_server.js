//This is server side script for Node.JS. This code will response to html client as well as connect to Mongo DB as a service(cloud)
//and store database to mongo DB online 

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var MongoClient = require('mongodb').MongoClient;
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/', function(req, res) {
  //res.send('You sent the name "' + JSON.stringify(req.body) + '".');
  res.send("Thank you for your registration");

  // Retrieve


// Connect to the db
   MongoClient.connect("mongodb://root:root@ds053090.mlab.com:53090/cmpe280", function(err, db) {
  if(!err) {
    console.log("We are connected to Mongo DB as a service");
    db.collection('registration', function(err,collection){
    collection.insert(req.body, function(){});
});
  }
});
   console.log('Data sent by user is "' + JSON.stringify(req.body) + '".');
   res.end();
});

app.listen(8088, function() {
  console.log('Server is running at http://127.0.0.1:8088/');
});