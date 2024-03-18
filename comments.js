// Create web server
var express = require('express');
var app = express();

var comments = require('./comments.json');

app.get('/comments', function(req, res) {
  if (req.query.id) {
    res