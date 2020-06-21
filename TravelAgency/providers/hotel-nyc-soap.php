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
        $randnum = rand(1111111111,9999999999);
        $parametros = array('nombre' => $data->{'nombre'} ,'apellido' => $data->{'apellido'}, 'correo' => $data->{'correo'}, 'telefono' => $randnum , 'formaPago' => 'Debito');
        $response = $soapClient->call("RegistrarCliente", array($parametros));
        $res =  $response['respuesta'];
        if ($res == "Exito"){
            $dataResponse = array ('respuesta' => 'exito');
        } else if ($res == "Error"){
            $dataResponse = array ('respuesta' => 'error');
        }else if ($res == "Duplicado"){
            $dataResponse = array ('respuesta' => 'duplicado');
        }
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($dataResponse);
    }
    
?>