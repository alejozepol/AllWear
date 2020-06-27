const express = require("express");
const app = express();
var INITIALSTATE = require('./initialState.json');

app.post('/api-allwear',function getJson(req, res, next){
    res.send(INITIALSTATE);
});

app.get('/api-allwear',function getJson(req, res, next){
  res.send(INITIALSTATE);
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});