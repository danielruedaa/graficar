$(document).ready(function() {
//  $('#respuesta').hide();
  $('#btn-ver').click(function(evento) {
//    $('#respuesta').hide();
    evento.preventDefault();//para evitar que el formulario sea enviado de manera tradicional.
    //var datos_formulario = $(this).serialize();//creo un array con los datos
    //console.log(datos_formulario);
    $.ajax({
      url: 'CargarDatos.php',//direccion
      //data: datos_formulario,//cargo los datos que voy a enviar
      type: 'POST',// medio de envio
      //dataType: 'json',//como llega la respuseta
      success:function(datos) {// si funciono
        $('#resultados').html(datos);
        //$('#respuesta').html(datos.envio);
      }
    });
  });

  google.load('visualization','1.0',{'packages':['corechart']});<!--importar de google lo que necesitamos-->
	google.setOnLoadCallback(dibujar);<!--funcion que va a ejecutar la creamos-->

	function dibujar(){
    var info=JSON.parse(data);
		var data = new google.visualization.arrayToDataTable([
			['tiempo','distancia'],info


		]);

		var opciones={'title':'visitas del web site','width':500,'height':300};
		var grafica = new google.visualization.LineChart(document.getElementById('graficaLineal'));<!--usamos el div de hatml en este objeto-->
		grafica.draw(data,opciones);
	}







});
