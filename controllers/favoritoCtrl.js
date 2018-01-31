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

module.exports = {prueba}