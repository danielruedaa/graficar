
$(document).ready(function() {
  google.load('visualization','1.0',{'packages':['corechart']}); //importar de google lo que necesitamos-->
  var guia;
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
      error:function (a,b,c) {
        console.log(a);
        console.log(b);
        console.log(c);
      },
      success:function(datos) {// si funciono
        $('#resultados').html(datos[0].carro);
        guia=datos[0].distancia;
        $('#guia1').html(guia);
        console.log(datos);
        cargagrafica(datos);
      }
    });
  });

  function cargagrafica(datos) {
    //google.setOnLoadCallback(); //funcion que va a ejecutar la creamos
    var arreglo= new Array();
    $.each(datos,function (index,objt1) {
      console.log(objt1);
      var arreglo2= [objt1.distancia,objt1.tiempo];
      arreglo.push(arreglo2);
    });
    console.log(arreglo);

/*
    var data = new google.visualization.arrayToDataTable([
			['tiempo','distancia'],
    //  [datos ,datos]

		]);
    var opciones={'title':'visitas del web site','width':500,'height':300};
		var grafica = new google.visualization.LineChart(document.getElementById('graficaLineal'));
		grafica.draw(data,opciones);

*/
  }

});
