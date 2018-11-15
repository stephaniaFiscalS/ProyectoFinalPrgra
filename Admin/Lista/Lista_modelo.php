<?php
require_once("../modeloAbstractoDB.php");	
class Usuario extends ModeloAbstractoDB {
	/************************************* TABLA DE USUARIOS*/
	public $Cod_usuario;
	public $Nombre;
	public $Usuario;
	public $Password;
	public $Tipo_Usuario;

	/************************************* TABLA DE HABITANTES*/
	public $habitante_id;
	public $habitante_nombs;
	public $habitante_edad;
	public $habitante_tipo;
	public $habitante_tiponum;
	public $habitante_tel;
	public $habitante_email;

	/************************************* TABLA DE VEHICULOS*/
	public $vehiculo_id;
	public $vehiculo_marca;
	public $vehiculo_modelo;
	public $vehiculo_placa;
	public $vehiculo_color;


	function __construct() {
			//$this->db_name = '';
	}

	public function consultar($Cod_usuario='') {
		if($Cod_usuario !=''):
			$this->query = "
			SELECT Cod_usuario, Nombre, Usuario, Password, Tipo_Usuario
			FROM usuarios
			WHERE Cod_usuario = '$Cod_usuario' order by Cod_usuario
			";
			$this->obtener_resultados_query();
		endif;
		if(count($this->rows) == 1):
			foreach ($this->rows[0] as $propiedad=>$valor):
				$this->$propiedad = $valor;
			endforeach;
		endif;
	}

	/********************************************************** USUARIO*/
	public function lista() {
		$this->query = "
		SELECT Cod_usuario, Nombre, Usuario, Password, Tipo_Usuario
		FROM usuarios WHERE Tipo_Usuario='Usuario' order by Cod_usuario
		";

		$this->obtener_resultados_query();
		return $this->rows;
	}
	/********************************************************** HABITANTE*/
	public function consultarr($habitante_id='') {
		if($habitante_id !=''):
			$this->query = "
			SELECT habitante_id, habitante_nombs, habitante_edad, habitante_tipo, habitante_tiponum,habitante_tel,habitante_email
			FROM tb_habitantes order by habitante_id
		";
			$this->obtener_resultados_query();
		endif;
		if(count($this->rows) == 1):
			foreach ($this->rows[0] as $propiedad=>$valor):
				$this->$propiedad = $valor;
			endforeach;
		endif;
	}
	
	public function listaa() {
		$this->query = "
		SELECT habitante_id, habitante_nombs, habitante_edad, habitante_tipo, habitante_tiponum,habitante_tel,habitante_email
		FROM tb_habitantes order by habitante_id
		";

		$this->obtener_resultados_query();
		return $this->rows;
	}

	public function listavehiculos(){
		$this ->query="
		SELECT vehiculo_id,vehiculo_marca,vehiculo_modelo,vehiculo_placa,vehiculo_color
		FROM tb_vehiculos order by vehiculo_id
		";
		$this-> obtener_resultados_query();
		return $this->rows;
	}





		// public function listaComuna() {
		// 	$this->query = "
		// 	SELECT comu_codi, comu_nomb
		// 	FROM tb_comuna as m order by comu_nomb
		// 	";
		// 	$this->obtener_resultados_query();
		// 	return $this->rows;
		// }

		// public function nuevo($datos=array()) {
		// 	if(array_key_exists('comu_codi', $datos)):
		// 		foreach ($datos as $campo=>$valor):
		// 			$$campo = $valor;
		// 		endforeach;
		// 		$this->query = "
		// 		INSERT INTO tb_comuna
		// 		(comu_codi, comu_nomb, muni_codi)
		// 		VALUES
		// 		(NULL, '$comu_nomb', '$muni_codi')
		// 		";
		// 		$this->ejecutar_query_simple();
		// 	endif;

		// }

		// public function editar($datos=array()) {
		// 	foreach ($datos as $campo=>$valor):
		// 		$$campo = $valor;
		// 	endforeach;
		// 	$this->query = "
		// 	UPDATE tb_comuna
		// 	SET comu_nomb='$comu_nomb',
		// 	muni_codi='$muni_codi'
		// 	WHERE comu_codi = '$comu_codi'
		// 	";
		// 	$this->ejecutar_query_simple();
		// }

		// public function borrar($comu_codi='') {
		// 	$this->query = "
		// 	DELETE FROM tb_comuna
		// 	WHERE comu_codi = '$comu_codi'
		// 	";
		// 	$this->ejecutar_query_simple();
		// }
}
?>