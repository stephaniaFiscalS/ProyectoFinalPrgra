  <?php 
session_start();
require 'funcs/conexion.php';
require 'funcs/funcs.php';

  // include 'datosDepa.php';
  

  // require_once('Lista/Lista_modelo.php');
  // $usuario1 = new Usuario();
  // $listado = $usuario1->lista();
  // $usuario2 = new Usuario();
  // $listado2=$usuario2->listaa();




  ?>
  <!DOCTYPE html>
  <html>
  <head>
    <title>Administrador</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/input.css">

    <link rel="stylesheet" type="text/css" href="css/notification.css"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!--************************************* JQUERY ************************************* -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!--************************************* JQUERY ************************************* -->


  </head>
  <body>

    <div class="header">
      <h2>Bienvenido administrador</h2>
    </div>


    <!-- /**************************************************FILA*/ -->
    <div class="row">
      <!-- /**************************************************COLUMNA IZQUIERDA*/ -->
      <div class="leftcolumn">

        <?php include_once('navigacion.php') ?>

      </div>
      <!-- /**************************************************CIERRA COLUMNA IZQUIERDA */ -->
      <!-- /**************************************************COLUMNA DERECHA*/ -->
      <div class="rightcolumn">

        <!-- /**************************************************CERRAR SESION*/ --> 
        <div class="card">
          <h2 style="text-align: center;"><?php echo $_SESSION['nombre_persona']; ?></h2>
          <form method="post" action="logout.php">
            <button class="botonSalir" name="submit" type="submit">Cerrar sesion</button>
          </form>

        </div>
        <!-- /**************************************************CIERRA CERRAR SESION*/ --> 


        <!-- /**************************************************VER LISTA LA CANTIDAD DE USUARIO*/ -->
        <div class="card">
          <div class="iconsss">
            <i style=" font-size:70px;" class="fas fa-user-check"></i>
          </div>
          
          <h1 style="text-align: center;"><?php echo $nom_row?></h1>
          <h3 style="text-align: center;">Usuarios registrados</h3>
        </div>

      </div>
      <!-- /**************************************************CIERRA VER LISTA LA CANTIDAD DE USUARIO*/ -->
      <!-- /**************************************************CIERRA COLUMNA DERECHA*/ -->
    </div>
    <!-- /**************************************************CIERRA FILA*/ -->
    <div class="footer">
      <h2>&copy; Estudiantes- FCECEP</h2>
    </div>

  </body>
  </html>

