'use strict'

var express = require('express');
var favoritoController = require('../controllers/favoritoCtrl')

var api = express.Router();



api.get("/prueba/:name?",favoritoController.prueba)
api.get("/favorito/:id",favoritoController.getFavorito)
api.post("/favorito",favoritoController.saveFavorito)


module.exports = api