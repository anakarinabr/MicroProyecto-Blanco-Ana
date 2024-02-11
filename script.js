let tableros = [];

//CONTADOR TURNOS
var countRounds = 0;

//Generar un array de numeros random sin repetir
const min = 1;
const max = 50;
const quantity = 50;
const randomUniqueNumbers = getRandomUniqueNumbers(min, max, quantity);
var arrayindex = 0;

function generateBoard(size) {
  DeleteDashboard();

  mostrarFlex("Tablas");

  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";
  const contenedor = document.createElement("div");

  for (let j = 0; j < 4; j++) {
    const name = document.createElement("div");

    if (j === 0) {
      var jugador1 = document.getElementById("jugador1").value;
      name.innerHTML = jugador1;
      name.classList.add("player-name1");
      contenedor.appendChild(name);
    } else if (j === 1) {
      var jugador2 = document.getElementById("jugador2").value;
      name.innerHTML = jugador2;
      name.classList.add("player-name2");
      contenedor.appendChild(name);
    } else if (j === 2) {
      var jugador3 = document.getElementById("jugador3").value;
      name.innerHTML = jugador3;
      name.classList.add("player-name3");
      contenedor.appendChild(name);
    } else {
      var jugador4 = document.getElementById("jugador4").value;
      name.innerHTML = jugador4;
      name.classList.add("player-name4");
      contenedor.appendChild(name);
    }

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

    contenedor.appendChild(tablero);
    boardContainer.appendChild(contenedor);
    tableros.push(tableroarray);
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

function number() {
  countRounds++;
  let num = randomUniqueNumbers[arrayindex];
  arrayindex++;
  const element = document.getElementById("number_aleatorio");
  element.innerHTML = num;
  changeCell(num);
}

function changeCell(aleatorio) {
  const cell = document.querySelectorAll(".board-cell");
  cell.forEach((cell) => {
    let number = cell.innerHTML;

    if (number == aleatorio) {
      cell.style.backgroundColor = "red";
    }
  });
}

function DeleteDashboard() {
  const element = document.getElementById("form");
  element.style.display = "none";
}

function mostrarFlex(id) {
  const element_new = document.getElementById(id);
  element_new.style.display = "flex";
}

//Esto genera un array random con valores no repetidos
function getRandomUniqueNumbers(min, max, quantity) {
  if (max - min + 1 < quantity) {
    return "No se pueden generar la cantidad de números solicitados en el rango dado.";
  }

  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  let randomNumbers = [];
  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}
