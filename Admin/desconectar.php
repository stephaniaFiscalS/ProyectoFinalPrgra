<?php 
session_start();
if($_SESSION['usuario_persona']){	
	session_destroy();
	header("location:index.php");
}
else{
	header("location:index.php");
}
?>