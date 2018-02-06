'use strict'

var favoritoModel = require('../models/favoritoModel');
var moment = require('moment')

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
    var id = req.params.id;

    favoritoModel.findById(id,function(err,resp){
        if(err){
            res.status(500).send({message: "Error al devolver el marcador por id"})
        }
        else{
            if(!resp){
                res.status(400).send({message: "No hay marcadores con ese id"})
            }else{
                res.status(200).send({data:resp})
            }
        }
    })

}

function getFavoritos(req,res){
    favoritoModel.find({}).sort('-date').exec(function(err,resp){
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
    favorito.date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),


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
    var id = req.params.id;
    var params = req.body;


    favoritoModel.findByIdAndUpdate(id, params, function(err,resp){
        if(err){
            res.status(500).send({message: "Error updating data"})
        }
        else{
            res.status(200).send({data:resp})
        }
    })
}

function deleteFavorito(req,res){
    favoritoModel.find({}).sort('-date').exec(function(err,resp){
        if(err){
            res.status(500).send({message: "Error al devolver el marcador"});
        }
        else{
            if(!resp.length){
                res.status(400).send({message: "No existe el marcador"});
            }else{
                console.log('resp',favorito[0]);
                resp[0].remove(function(err){
                    if(err){
                        res.status(500).send({message: "Error al eliminar el marcador"});
                    }else{
                        res.status(200).send({message: "Marcador eliminado"});
                    }
                })
            }
        }
    })
}


module.exports = {prueba, getFavorito, saveFavorito, updateFavorito, deleteFavorito, getFavoritos}