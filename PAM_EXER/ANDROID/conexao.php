<?php

define("url", "localhost");
define("db", "db_android");
define("us","root");
define("pw","");
define("port","3306");

$con = new mysqli(url,us,pw,db,port);

if($con->connect_error){
    die("falha na conexão").$con->connect_error; 
}

?>