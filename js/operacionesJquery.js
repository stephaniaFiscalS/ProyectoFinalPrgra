function operaciones(){

	/*$("#cargar").mouseover(function(){
		$("#contenido").load("html/pagina1.php");
	})*/

	$("#vh").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.get( "PHP/vehiculo/vehi.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		}); 
	})

	$("#emp").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "PHP/empleado/empleado.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#usu").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "PHP/usuario/usuario.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#con").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "PHP/conjunto/conjunto.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#apt").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "PHP/apartamento/apartamento.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#blo").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "PHP/bloque/bloque.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#nuevo3").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.ajax({ 
			type:'get',
			url:"html/pagina2.html",
			dataType:'html',
			success: function(respuesta){
			$("#contenido").html(respuesta)
			}

		});
	})

	$("#mostrar").hide()
 	
	$("#ocultar").click(function(){//cuando se identifica con id se llama con #
		$("p").hide();
		$(".mostrar").show();
		$(".ocultar").hide();
		$(".ocultarimpar").hide();

	})

	$("#ocultarimpar").click(function(){
		$(".impar").hide();//cuando se identifica con class se llama con . y el nombre del class
		$(".ocultarimpar").hide();
		$(".mostrar").show();
		$(".ocultar").show();
	})

	$("#mostrar").click(function(){
		$("p").show();
		$(this).hide();
		$(".ocultar").show();
		$(".ocultarimpar").show();
	})

 	$("#cerrar").click(function(){
		
		$.get( "../Home.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		}); 
	})

}