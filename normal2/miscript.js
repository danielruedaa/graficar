$(document).ready(function() {
  $('#btn-ver').click(function(evento) {
    evento.preventDefault();//para evitar que el formulario sea enviado de manera tradicional.
    console.log('entro');
    $.ajax({
      url: 'CargarDatos.php',//direccion
      //data: ,//cargo los datos que voy a enviar
      type: 'POST',// medio de envio
      dataType: 'json',//como llega la respuseta
      beforeSend:function() {
        $('#btn-ver').val("Graficando......");
      },
      success:function(datos) {// si funciono
        $('#resultados').html(datos);
        console.log(datos);
        alert('eee ');
        //$('#respuesta').html(datos.envio);
      }
    });
  });
/*
  google.load('visualization','1.0',{'packages':['corechart']}); //importar de google lo que necesitamos-->
	google.setOnLoadCallback(dibujar); //funcion que va a ejecutar la creamos

	function dibujar(){
    var info=JSON.parse(data);
		var data = new google.visualization.arrayToDataTable([
			['tiempo','distancia']


		]);

		var opciones={'title':'visitas del web site','width':500,'height':300};
		var grafica = new google.visualization.LineChart(document.getElementById('graficaLineal'));<!--usamos el div de hatml en este objeto-->
		grafica.draw(data,opciones);
	}
*/






});
