

var express = require('express');
var bodyParser = require('body-parser')
var api = require ('./routes/rutas-favorito')

var app= express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-APO-KEY, Origin,X-Request-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
})

app.use('/api',api)


module.exports = app;