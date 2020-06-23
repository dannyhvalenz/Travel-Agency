<?php 
    include('nusoap/lib/nusoap.php');
    $soapClient = new nusoap_client('http://3.133.140.0:8080/ws/hotel.wsdl','wsdl');
    $data = json_decode(file_get_contents('php://input'), true);

    switch ($data['metodo']){
        case 0:
            CreateClientes(json_decode($data['json']));
        break;
    }


    function CreateClientes($data){
        global $soapClient;
        $randnum = rand(1111111111,9999999999);
        $parametros = array('Usuario' => $data->{'correo'} ,'Contraseña' => "null", 'Nombre' => $data->{'nombre'} , 'Apellido' => $data->{'apellido'} ,'Correo' => $data->{'correo'}, 'Telefono' => $randnum);
        $response = $soapClient->call("CrearCliente", array($parametros));
        $res =  $response['respuesta'];
        if ($res == "false"){
            $dataResponse = array ('respuesta' => 'error');
        } else{
            $dataResponse = array ('respuesta' => 'exito');
        }
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($dataResponse);
    }

?>