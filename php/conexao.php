<?php

$host = "localhost";
$usuario = "root";
$senha = "1234";
$banco = "tarefa_db";

$con = new mysqli($host,$usuario,$senha,$banco);

if($con -> connect_errno){
    echo "Erro ao conectar com o banco! (".$con -> connect_errno.")".$con -> connect_errno;
}