<?php 

require 'funcs/conexion.php';
require 'funcs/funcs.php';

session_start();//Iniciar una nueva sesión o reanudar la existente


?>

<!DOCTYPE html>
<html> 
<head>


<title>Portero</title>
  <link rel="stylesheet" type="text/css" href="css/principal.css">
  <link rel="stylesheet" type="text/css" href="PHP/css/table.css">
  <link rel="stylesheet" type="text/css" href="css/button.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
  <script type="text/javascript" src="js/operacionesJquery.js"></script>
  <script type="text/javascript">
    $(document).ready(operaciones)
  </script>

  <title></title>
</head>
<body>
  <div class="header">
    <h1>Bienvenido Portero</h1>
  </div>
  <div class="row">
    <div class="leftcolumn">
      <div class="card" id="contenido" >
      </div>
    </div>

  
  <div class="rightcolumn">
    <div class="card">
      
        <img class="ImagLog" src="IMG/equipo.png" alt="logotipo" >
        <p style="text-align: center;"><?php echo $_SESSION['nombre_persona'] ?></p>
        <button class="btnPor" id="par">Parqueadero</button>
        <button class="btnPor" id="inf">Informacion</button>
        <form method="post" action="logout.php">
            <button class="btnPor" name="submit" type="submit">Cerrar sesion</button>
          </form>
       
  
    </div>
  </div>
</div>
</body>
</html>