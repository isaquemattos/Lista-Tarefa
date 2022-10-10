<?php

include_once "conexao.php";

$sql = "SELECT identificador_tarefa, nome_tarefa, custo, data_limite FROM tarefas ORDER BY ordem_apresentacao;";

$resultado = $con->query($sql);

if($resultado){
    while($linha = $resultado->fetch_assoc()){
        extract($linha);
        
        $dados[] = [
            'id' => $linha['identificador_tarefa'],
            'nome' => $linha['nome_tarefa'],
            'custo' => $linha['custo'],
            'data' => $linha['data_limite']
        ];
    }

    $resposta = ['status' => true, 'dados' => $dados];

}else{
    $resposta = ['status' => false, 'mensagem' => "<p class='resp erro'>Erro ao listar as tarefas!</p>"];
}

echo json_encode($resposta);