'use strict'

var express = require('express');
var favoritoController = require('../controllers/favoritoCtrl')

var api = express.Router();



api.get("/prueba/:name?",favoritoController.prueba)


module.exports = api