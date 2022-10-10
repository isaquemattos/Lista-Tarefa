const tarefas = document.querySelectorAll("[draggable='true']");

tarefas.forEach(tarefa =>{
    tarefa.addEventListener('dragstart',  (e) => {
        tarefa.classList.add("movendo");
    });

    tarefa.addEventListener('dragend', (e) => {
        tarefa.classList.remove("movendo");
    });

    tarefa.addEventListener('dragover', (e) => {
        let movendo = document.querySelector(".movendo");
        tarefa.insertAdjacentElement("afterend", movendo);
    });
});


const btSobe = document.querySelectorAll(".sobe");
const btDesce = document.querySelectorAll(".desce");

btSobe.forEach(sobe =>{
    sobe.addEventListener("click", (e)=>{
        console.log("subiu")
    });
});

btDesce.forEach(desce =>{
    desce.addEventListener("click", (e)=>{
        console.log("desceu")
    });
});