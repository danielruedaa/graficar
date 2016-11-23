<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Grafica Normal</title>
<?php require "CargarDatos.php" ?>
<?php foreach ($datos as $key => $value){
 echo $value['tiempo'];echo " "; echo $value['distancia'];echo " ";echo $value['carro'];echo "<br>";
 }?>
 <!--Load the AJAX API      ,'carro'                    ,<? //php echo $value['carro']; ?>-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
	google.load('visualization','1.0',{'packages':['corechart']});<!--importar de google lo que necesitamos-->
	google.setOnLoadCallback(dibujar);<!--funcion que va a ejecutar la creamos-->

	function dibujar(){
		var data = new google.visualization.arrayToDataTable([
			['tiempo','distancia'],


      <?php foreach ($datos as $key => $value): ?>
      [<?php echo $value['tiempo']; ?> ,<?php echo $value['distancia']; ?>  ],

      <?php endforeach; ?>


		]);

		var opciones={'title':'visitas del web site','width':500,'height':300};
		var grafica = new google.visualization.LineChart(document.getElementById('graficaLineal'));<!--usamos el div de hatml en este objeto-->
		grafica.draw(data,opciones);
	}

</script>

</head>

<body>
<div id="graficaLineal" style="width: 100%; height: 500px; margin: 0 auto">
</div>
</body>
</html>
