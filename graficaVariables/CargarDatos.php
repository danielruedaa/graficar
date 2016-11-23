<?php

$fecha= date("d-m-y ");//pongo la fecha
$hora= date('g:i:sa');//la hora
$numero=rand(1, 20);
echo $fecha." ".$hora." ".$numero;
$x=$fecha." ".$hora;
$dato_grafica = array('x' => $x,
											'y' => $numero, );

							json_encode($dato_grafica);
echo "<pre>";
//echo json_encode($dato_grafica);
echo "<br>";
echo "</pre>";


?>
