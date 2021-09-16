<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8"); 
require("conexao.php");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$sqlInsert = " insert into tb_usuario(nome, email, senha) ";
$sqlInsert .= " values('".$obj["nome"]."','".$obj["email"]."','".$obj["senha"]."')";
//echo $sqlInsert;

if($con->query($sqlInsert)){
    echo json_encode("Sucesso!!"); 
}else{
    echo json_encode("Erro!!");
}

