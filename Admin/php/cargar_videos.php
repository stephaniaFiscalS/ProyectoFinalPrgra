<?php 
require_once 'conexion.php';

function getVideos(){
  $mysqli = getConn();
  $id = $_POST['id'];
  $query = "SELECT * FROM `municipios` WHERE departamento_id = $id" ;
  $result = $mysqli->query($query);
  $videos = '<option value="0">Elige una opción</option>';
  while($row = $result->fetch_array(MYSQLI_ASSOC)){
    $videos .= "<option value='$row[id]'>$row[nombre]</option>";
  }
  return $videos;
}

echo getVideos();
