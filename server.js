var express = require('express');
var session = require('express-session');
var passport = require('passport');
var facebook = require('passport-facebook');

var app = express();

var randomText = require("./textArt")
app.listen(9001, function(){
  randomText();
})
