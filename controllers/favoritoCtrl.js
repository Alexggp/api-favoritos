'use strict'

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

}

function saveFavorito(req,res){
    var params = req.body;

    res.status(200).send({data:params})

}


function updateFavorito(req,res){
    var params = req.body;

    res.status(200).send({data:params})
}

function deleteFavorito(req,res){
    var favoritoId = req.params.id;

    res.status(200).send({data:favoritoId})
}


module.exports = {prueba, getFavorito, saveFavorito, updateFavorito, deleteFavorito}