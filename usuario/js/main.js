/*Buscar el elemento que se quiere seleccionar el . es porque es una clase*/
const btnToggle=document.querySelector('.toggle-btn');
//console.log(btnToggle)  /*Para verlo por consola*/

/*Evento al hacer click una funcion Ocultar y mostrar la barra */
btnToggle.addEventListener('click',function(){
//	console.log('cliked')  
//Busca el elemento por id y lo guarda el .toggle le agrega una clase y se la quita
	document.getElementById('sidebar').classList.toggle('active');
})



/*
const btnToggle=document.querySelector('btn-home');
$(function(){
	$("btn-home").click(function(){ console.log('cliked')  
		var url="dame-datos.php";
		$.ajax({
			type:"POST",
			url:url,
			data: $("#formulario").serialize(),
			success: function(data)
			{
				$(#resultado).html(data);
			}
		});
		return false;
	});
});*/