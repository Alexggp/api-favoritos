'use strict'

var favoritoModel = require('../models/favoritoModel');

function prueba (req, res){

    var user;
    if(req.params.name){
        user = req.params.name;
    }else{
        user = 'Anónimo'
    }


    res.status(200).send({message: 'Hola mundo '+ user})
}

function getFavorito(req,res){
    var favoritoId = req.params.id;

    res.status(200).send({data:favoritoId})
}

function getFavoritos(req,res){
    favoritoModel.find({}).sort('-title').exec(function(err,resp){
        if(err){
            res.status(500).send({message: "Error al devolver los marcadores"})
        }
        else{
            if(!resp.length){
                res.status(400).send({message: "No hay marcadores"})
            }else{
                res.status(200).send({data:resp})
            }
        }
    })
}

function saveFavorito(req,res){
    var favorito = new favoritoModel();

    var params = req.body;

    favorito.title= params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    console.log(favorito)


    favorito.save(function(err,resp){
        if(err){
            res.status(500).send({message: "Error saving data"})
        }
        else{
            res.status(200).send({data:resp})
        }
    })




}


function updateFavorito(req,res){
    var params = req.body;

    res.status(200).send({data:params})
}

function deleteFavorito(req,res){
    var favoritoId = req.params.id;

    res.status(200).send({data:favoritoId})
}


module.exports = {prueba, getFavorito, saveFavorito, updateFavorito, deleteFavorito, getFavoritos}