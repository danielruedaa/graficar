<?php
include'Conexion.php';

$datos = array();
$Consulta1=mysqli_query($con,"SELECT carro,distancia,tiempo FROM datos ")or die(mysql_error());
while($datosConsulta=mysqli_fetch_array($Consulta1)){
//$datosConsulta['carro']
	$datos[] = array('carro' =>$datosConsulta['carro'] ,
								'distancia' =>$datosConsulta['distancia'] ,
								'tiempo' =>$datosConsulta['tiempo'] ,
		);
}
echo json_encode($datos);


?>
