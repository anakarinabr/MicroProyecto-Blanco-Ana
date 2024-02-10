let tableros = [];

function generateBoard(size) {

    DeleteDashboard();

    mostrarFlex("Tablas");
    
  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";

  for (let j = 0; j < 4; j++) { 
    let tableroarray = [];
    const tablero = document.createElement("div");

    if (size === 3) {
        tablero.classList.add("table3");
      } else if (size === 4) {
        tablero.classList.add("table4");
      } else {
        tablero.classList.add("table5");
      }

    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("board-cell");
      const num = getRandomNumber();
      cell.textContent = num;
      tableroarray.push(num);
      tablero.appendChild(cell);
    }

    boardContainer.appendChild(tablero);
    tableros.push(tableroarray);
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

function number(){
    const num = getRandomNumber();
    const elemento = document.getElementById("number_aleatorio");
    elemento.innerHTML = num;
    cambiarCeldas(num);
}

function cambiarCeldas(aleatorio){
    const celdas = document.querySelectorAll(".board-cell");
    celdas.forEach((celda)  => {
       let numero =  celda.innerHTML;

       if(numero == aleatorio){
            celda.style.backgroundColor="red";
       }
    
    })
}

function DeleteDashboard(){

    const elemento = document.getElementById("form");
    elemento.style.display = "none";
}

function mostrarFlex(id){

    const elemento_new = document.getElementById(id);
    elemento_new.style.display = "flex";

}
