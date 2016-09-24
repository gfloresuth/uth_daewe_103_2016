// Modulo express
var express = require('express');

// Crear servidor
var app = express();

const port = 8090;
app.use('/', express.static(__dirname+'/public'));

// Servicio /holamundo/
app.get('/holamundo/',function(req,res){
    res.send('Hola mundo');
});

function datosFalsos()
{
    var listado = [];
    listado.push('SODA');
    listado.push('PAPAS');
    listado.push('TAMALES');
    listado.push('MARUCHAN');
    listado.push('TOSTITOS');
    listado.push('FRUTA');
    
    return listado;
}

// Lista de comida
app.get('/listacomida/',function(req,res){
/*    var listado = [];
    listado.push('SODA');
    listado.push('PAPAS');
    listado.push('TAMALES');
    listado.push('MARUCHAN');
    listado.push('TOSTITOS');
    res.json(listado);*/
    res.json(datosFalsos());


});


app.listen(port,function(){
    console.log('Listo');
});