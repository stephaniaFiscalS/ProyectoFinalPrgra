<?php
  require_once('modeloinf.php');
  $personal = new Persona();
  $listado = $personal->lista();
?>

<!DOCTYPE html>
<html>
<head>

  <link rel="stylesheet" type="text/css" href="../css/principal.css">
  <link rel="stylesheet" type="text/css" href="css/table.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title></title>
</head>
<body>
  <div class="header">
    <h1>Bienvenido Portero</h1>
  </div>
  <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h2>Informacion personal</h2>
          <form action="">
          <?php foreach($listado as $fila){ ?>

            <label>Nombre</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['nombre_habitante']) ?>"> <br><br>
            <label>Apellido</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['apellido_habitante']) ?>"> <br><br>
            <label>Edad</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['edad_habitante']) ?>"> <br><br>
            <label>Tipo de Documento</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['tipo_doc']) ?>"> <br><br>
            <label>Nro</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['num_doc']) ?>"> <br><br>
            <label>Telefono</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['telefono_habitante']) ?>"> <br><br>
            <label>Email</label>
            <input name="nombre" disabled="false" type="text" value="<?php echo utf8_encode($fila['email_habitante']) ?>"> 
            <?php } ?>
          </form>
      </div>
  
    
  </div>

  
  <div class="rightcolumn">
    <div class="card">
      <ul>
        <li><img src="../IMG/equipo.png" alt="logotipo" ></li>
        <li><button class="button" id="par">Parqueadero</button></li>
        <li><button class="button" id="inf">Informacion</button></li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>