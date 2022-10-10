<?php
include_once "conexao.php";

$dados =  filter_input_array(INPUT_POST, FILTER_DEFAULT);
/*
$dados['nome'] = 'tarefa 3';
$dados['custo'] = '789';
$dados['data'] = 'tarefa 3';
$dados['ordem'] = '22';*/
if(!$dados['nome']){
    $resposta = ['status' => false, 'mensagem' => "<p class='resp erro'>O campo nome não pode estar vazio!</p>"];

}elseif(!$dados['custo']){
    $resposta = ['status' => false, 'mensagem' => "<p class='resp erro'>O campo custo não pode estar vazio!</p>"];

}elseif(!$dados['data']){
    $resposta = ['status' => false, 'mensagem' => "<p class='resp erro'>O campo data não pode estar vazio!</p>"];

}else{
    $sql = "INSERT INTO tarefas (nome_tarefa, custo, data_limite, ordem_apresentacao) VALUES (?, ?, ?, ?);";
    $novaTarefa = $con->prepare($sql);
    
    $novaTarefa->bind_param('sdsi', $dados['nome'], $dados['custo'], $dados['data'], $dados['ordem']);
    
    $novaTarefa->execute();
    echo "afecc: ".$novaTarefa->affected_rows;
    if(($novaTarefa->affected_rows) == 0){
        $resposta = ['status' => true, 'mensagem' => "<p class='resp acerto'>Tarefa Cadastrada!</p>"];
    }else{
        $resposta = ['status' => false, 'mensagem' => "<p class='resp erro'>Erro ao Cadastrar nova tarefa!</p>"];
    }
}

echo json_encode($resposta);