'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoritoSchema = Schema({
    title: String,
    description: String,
    url: String,
    date: String
});

module.exports = mongoose.model('Favorito', favoritoSchema);