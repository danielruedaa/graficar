<?php
include'Conexion.php';

$datos = array();
$Consulta1=mysqli_query($con,"SELECT carro,distancia,tiempo FROM datos ")or die(mysql_error());
while($datosConsulta=mysqli_fetch_array($Consulta1)){

	$datos[$datosConsulta['carro']] = array('carro' =>$datosConsulta['carro'] ,
								'distancia' =>$datosConsulta['distancia'] ,
								'tiempo' =>$datosConsulta['tiempo'] ,
		);
}
echo json_encode($datos);
echo "<pre>";

echo "<br>";
echo "//////";
echo "<br>";

//print_r(json_encode($datos));
/*echo $datos['carro 9']['distancia'];
echo "<br>";
foreach ($datos as $key => $value) {
	# code...
	echo $value['distancia'];
}*/
echo "</pre>";


?>
