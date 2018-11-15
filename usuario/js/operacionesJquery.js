function operaciones(){

	$("#inf").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.get( "php/info.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		}); 
	})

	$("#edit").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/infedit.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#zp").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/zonasP.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#veh").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/vehiculos.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#agregarv").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/vehinuevo.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#cha").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/chat.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#bz").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/buzon.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#cad").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/cuotam.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})

	$("#agre").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "php/agrezp.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		});
	})


	$("#contenido").on("click","btnB",function(){
	//Recupera datos del formulario
	var codigo = $(this).attr("codigo");
	if ( confirm("¿Realmente desea borrar el registro?")){		
		$.ajax({
       		method: "post",
           	data: {codigo: codigo, accion:'borrar'},
           	url: "./php/modelo/controlador.php",
           	dataType: "html"
       	})  .done(function( result ) {
       		$("#titulo").html("Listado de servicios");
       		$( "#contenido" ).load("./php/comuna/index.php");
       	});

		}
	});




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

}