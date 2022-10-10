const btIncluir = document.querySelector("#incluir");
const btEditar = document.querySelectorAll(".editar");
const btSair = document.querySelector("#sair");
let form = document.querySelector(".modal-container");

btIncluir.addEventListener("click", ()=>{
    form.classList.add("hide");
});

btEditar.forEach( button =>{
    button.addEventListener("click", ()=>{
        form.classList.add("hide");
    });
});

btSair.addEventListener("click", ()=>{
    form.classList.remove("hide");
});