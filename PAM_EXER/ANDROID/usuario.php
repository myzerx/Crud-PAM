<?php
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8"); 
require("conexao.php");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$sqlUsuario = " Select * from tb_usuario ";
$sqlUsuario .= " where email ='".$obj["email"]."' and";
$sqlUsuario .= " senha ='".$obj["senha"]."'";

//echo sqlInsert;
if( $row = $con->query($sqlUsuario)){
    if($row->num_rows > 0 ){
      echo json_encode("Ok");
    }
    else{
        echo  json_encode("Não encontrado!!");
    }
}
else{
    echo json_encode("Erro!!");
}
//var_dump($obj);
//$json = json_encode($resp);
?>