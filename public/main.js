$(document).ready(function(){
    //alert('hola Edmundo');
    //$('#divSalida').html('Que tal');
    $.get('/holamundo/',function(datos){
        $('#divSalida').html(datos);
    });
    $('#imgLista').click(function(){
        //alert('CLICK');
        $.getJSON('/listacomida/',function(datos){
            var texto = '';
            texto = datos.join('<br>');
            $('#divSalida').html('Hay datos<br>' + texto);
        });
    });
});
//alert('Saludos');
