var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/wolves');

mongoose.connection.on('error', function(err){});

var WolfSchema = new mongoose.Schema({
  name: String,
  color: String,
  size: String,
  created_at: { type: Date, default: Date.now }
})

var Wolves = mongoose.model('Wolves',WolfSchema)

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app, Wolves)

var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})
