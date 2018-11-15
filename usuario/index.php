<?php
session_start();
?>
<!DOCTYPE html>
<html> 
<head>
    <title>Usuario</title>
    <link rel="stylesheet" type="text/css" href="css/principal.css">
    <link rel="stylesheet" type="text/css" href="css/table.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/input.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    </script><meta charset="utf-8">
    <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/operacionesJquery.js"></script>
    
    <script type="text/javascript">
        $(document).ready(operaciones)
    </script>

</head>
<body>
  <?php echo $_SESSION['id_persona']; ?>
  <div class="header">
    <h1>Bienvenido Usuario</h1>
  </div>
  <div class="row">
    <div class="leftcolumn">
      <div class="card" id="contenido" >
      </div>
    </div>


    <div class="rightcolumn">
      <div class="card">

        <img class="ImageLog" src="IMG/equipo.png" alt="logotipo" >
        <br>
        <form action="logout.php" method="post">
          <button class="lis" name="submit" type="submit">Cerrar Sesion</button>
        </form>
        <button class="lis" id="inf">Informacion</button>
        <button class="lis" id="zp">Zonas Publicas</button>
        <button class="lis" id="veh">Vehiculos</button>
        <button class="lis" id="bz">Buzon</button>
        <button class="lis" id="cad">Cuota Admin</button>

      </div>
    </div>
  </div>
</body>
</html>