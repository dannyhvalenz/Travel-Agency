<?php 
    include('nusoap/lib/nusoap.php');
    $client = new nusoap_client('http://3.133.140.0:8080/ws/hotel.wsdl','wsdl');
    $data = json_decode(file_get_contents('php://input'), true);


?>