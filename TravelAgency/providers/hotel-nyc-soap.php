<?php 
    include('nusoap/lib/nusoap.php');
    $soapClient = new nusoap_client('http://54.162.225.248:8080/hotel.wsdl','wsdl'); 
    $data = json_decode(file_get_contents('php://input'), true);
    

    switch ($data['metodo']){
        case 0:
            getClientes(json_decode($data['json']));
        break;
    }


    function getClientes($data){
        global $soapClient;
        $parametros = array('nombre' => $data->{'nombre'} ,'apellido' => $data->{'apellido'}, 'correo' => $data->{'correo'}, 'telefono' => '0121212121' , 'formaPago' => 'Debito');
        $response = $soapClient->call("RegistrarCliente", array($parametros));
        $exito = "Se ha registrado al cliente ".$data->{'nombre'}." ".$data->{'apellido'}." en el sistema";
        $res =  preg_split("#/#", $response['respuesta']);
        if ($res[0] == "Exito"){
            $dataResponse = array ('respuesta' => 'exito', 'idCliente' => $res[1]);
        } else if ($res[0] == "Error"){
            $dataResponse = array ('respuesta' => 'error');
        }else if ($res[0] == "Duplicado"){
            $dataResponse = array ('respuesta' => 'duplicado');
        }
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($dataResponse);
    }
    
?>