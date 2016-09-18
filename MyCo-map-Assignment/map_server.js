var http = require('http'),
express = require('express');
var MongoClient = require('mongodb').MongoClient; 
var app = express();
app.set('port', process.env.PORT || 8088); 
var ObjectId = require('mongodb').ObjectID;
var myCollection;
var db = MongoClient.connect('mongodb://root:root@ds053090.mlab.com:53090/cmpe280', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('location');
var obj_id = new ObjectId('56f9c79ae4b05e6b92be92ef');

app.get('/Myco-map-A.html', function (req, res) {
    console.log("map assignmnet-part a");
var cursor = myCollection.find({},{fields: {'_id':0,'latitude':1,'longitude':1,'type':1}}).toArray(function(err, doc) {
    if(err)
        throw err;
    if(doc==null)
        return;
    console.log(doc);
    res.contentType('json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.send(doc);
});

});

app.get('/MyCo-map-B.html', function (req, res) {
    console.log("map assignmnet- part b");
var cursor = myCollection.find({'type':'RetailLocation'},{fields: {'_id':0,'latitude':1,'longitude':1,'revenue':1}}).toArray(function(err, doc) {
    if(err)
        throw err;
    if(doc==null)
        return;
    console.log(doc);
    res.contentType('json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.send(doc);
});

});


});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
