const inputItem = document.getElementById("input-item")
//console.log(inputItem.value)
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckBox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputChecbox.id = "checkbox-" + contador++;

  else {
    return console.log(inputItem.value)
  }
  //console.log(evento.target);
})

