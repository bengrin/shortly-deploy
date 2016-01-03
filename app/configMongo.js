var mongoose = require('mongoose');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/test';

mongoose.connect(uri);
var db = mongoose.connection;

module.exports = db;