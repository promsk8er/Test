var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express()

app.get('/', function (req, res) {
  res.send('Stefano sei un puzzone...')
})

app.listen(3000, function () {
  console.log('My app listening on port 3000!')
})


var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  
  console.log("Connected correctly to server.");
  db.close();
});