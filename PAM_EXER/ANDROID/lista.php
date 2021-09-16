<?php       
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8"); 
require_once('conexao.php');

$query_listusuario = "SELECT tb_usuario.id_us, tb_usuario.nome, tb_usuario.email FROM tb_usuario";
$list_usuario = $con->query($query_listusuario);

$J=[];
$I = 0;

if(isset($list_usuario)){
    while($Fetch = mysqli_fetch_assoc($list_usuario)){
        $J[$I]=[
            "Id"=>$Fetch['id_us'],
            "Nome"=>$Fetch['nome'],
            "Email"=>$Fetch['email'],
        ];
        $I++;
    }
    }

http_response_code(200);
echo json_encode($J);

?>