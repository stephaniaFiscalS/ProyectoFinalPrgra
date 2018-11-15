function operaciones(){

	/*$("#cargar").mouseover(function(){
		$("#contenido").load("html/pagina1.php");
	})*/

	$("#par").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.get( "tabla.php")
		.done(function( resultado ) {
			$("#contenido").html(resultado);
		}); 
	})

	$("#inf").click(function(){
		//$("#contenido").load("html/pagina2.html");
		$.post( "info.php")
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

}