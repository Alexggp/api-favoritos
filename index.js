'use strict'

var express = require('express');
var bodyParser = require('body-parser')

var app= express();
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/prueba/:name?",function(req, res){

    var user;
    if(req.params.name){
        user = req.params.name;
    }else{
        user = 'Anónimo'
    }


    res.status(200).send({message: 'Hola mundo '+ user})
})


app.listen(3000,function(){
    console.log("Funcionando correctamente en http://localhost: "+port)
});