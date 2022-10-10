const btnIncluir = document.querySelector("#incluir");
const btnEditar = document.querySelectorAll(".editar");
const btnExcluir = document.querySelector(".excluir");
const btnSalvar = document.querySelector(".salvar");
const btnSair = document.querySelector("#sair");
const formulario = document.querySelector("form");


btnIncluir.addEventListener("click", (e)=>{
    btnSalvar.classList.add("incluir");
});

btnEditar.forEach(button => {
    button.addEventListener("click", ()=>{
        btnSalvar.classList.add("edit");

        /*console.log(document.querySelector("[name='nome']").value);
        console.log(document.querySelector("[name='custo']").value);
        console.log(document.querySelector("[name='data']").value);*/
        let tabela = document.querySelectorAll("table tr");
        //console.log(tabela)
        //console.log(tabela[9].textContent)
        //console.log(tabela[10].textContent)

        document.querySelector("[name='nome']").value = "isaque";
        document.querySelector("[name='custo']").value = 1524;
        document.querySelector("[name='data']").value = "2022-10-10";
    });
});


if(formulario){
    formulario.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let dados = new FormData(formulario);

        let ordem = document.querySelectorAll("tr").length;

        dados.append("ordem", ordem);
        if(btnSalvar.className == "salvar incluir"){
            console.log("aeeee 1")
            const formResp = await fetch("php/salvar.php",{
                method: "POST",
                body: dados
            });
            console.log(formResp.json())
            const resp = await formResp.json();
            console.log("aeeee 2")
            console.log(resp['status'])
            if(resp['status']){
                document.querySelector("#resposta").innerHTML = resp['mensagem'];
                limpaCampos();
                listar();
            }else{
                document.querySelector("#resposta").innerHTML = resp['mensagem'];
            }

        }else if(btnSalvar.className == "salvar edit"){

        }
    });
}

btnSair.addEventListener("click", ()=>{
    btnSalvar.classList.remove("incluir");
    btnSalvar.classList.remove("edit");

    limpaCampos();
});

function limpaCampos(){
    document.querySelector("[name='nome']").value = "";
    document.querySelector("[name='custo']").value = "";
    document.querySelector("[name='data']").value = "";
}