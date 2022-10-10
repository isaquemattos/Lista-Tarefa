const linha = document.querySelector("table");
async function listar(){
    const dados = await fetch("php/listar.php");
    const resp = await dados.json();

    if(resp['status']){
        for(var i=0; i < resp.dados.length; i++){
            
            linha.innerHTML = linha.innerHTML + "<tr draggable='true' class='tarefa'> "+
            "<td><button class='sobe'><img src='img/up.png'></button><button class='desce'><img src='img/down.png'></button></td>"+
            "<td>"+resp.dados[i]['id']+"</td>"+
            "<td>"+resp.dados[i]['nome']+"</td>"+
            "<td>$ "+resp.dados[i]['custo']+"</td>"+
            "<td>"+resp.dados[i]['data']+"</td>"+
            "<td><button class='editar'><img src='img/editar.png' draggable='false'></button><button class='excluir'><img src='img/excluir.png' draggable='false'></button></td>"+
            "</tr>";
        }
    }else{
        document.querySelector("#resposta-tabela").innerHTML = resp['msg'];
    }
}

listar();