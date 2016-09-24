var express = require('express');

var app = express();

const port = 8090;
app.use ('/', express.static(__dirname+'/public'));

app.use('/holamundo/',function(req,res){
    res.send('Hola mundo');
});

app.listen(port,function(){
    console.log('Listo');
});