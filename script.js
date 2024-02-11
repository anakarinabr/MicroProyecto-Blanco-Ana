let tableros = [];
let puntos_player1 = 0;
let puntos_player2 = 0;
let puntos_player3 = 0;
let puntos_player4 = 0;

//CONTADOR TURNOS
var countRounds = 0;

//Generar un array de numeros random sin repetir
const min = 1;
const max = 50;
const quantity = 50;
const randomUniqueNumbers = getRandomUniqueNumbers(min, max, quantity);
var arrayindex = 0;

function generateBoard(size) {
  tableros = [];
  countRounds = 0;
  arrayindex = 0;
  DeleteDashboard();

  mostrarFlex("Tablas");

  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";

  for (let j = 0; j < 4; j++) {
    const contenedor = document.createElement("div");
    const name = document.createElement("div");

    if (j === 0) {
      var jugador1 = document.getElementById("jugador1").value;
      name.innerHTML = jugador1;
      name.classList.add("player-name1");
      contenedor.appendChild(name);
      contenedor.id = "contenedor_jugador1";
    } else if (j === 1) {
      var jugador2 = document.getElementById("jugador2").value;
      name.innerHTML = jugador2;
      name.classList.add("player-name2");
      contenedor.appendChild(name);
      contenedor.id = "contenedor_jugador2";
    } else if (j === 2) {
      var jugador3 = document.getElementById("jugador3").value;
      name.innerHTML = jugador3;
      name.classList.add("player-name3");
      contenedor.appendChild(name);
      contenedor.id = "contenedor_jugador3";
    } else {
      var jugador4 = document.getElementById("jugador4").value;
      name.innerHTML = jugador4;
      name.classList.add("player-name4");
      contenedor.appendChild(name);
      contenedor.id = "contenedor_jugador4";
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
    for (let i = 0; i < size; i++) {
      const columnas = [];
      for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("board-cell");
        const num = getRandomNumber();
        columnas.push(num);
        cell.textContent = num;
        tablero.appendChild(cell);
      }
      tableroarray.push(columnas);
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
  const tablero1 = tableros[0];
  const tablero2 = tableros[1];
  const tablero3 = tableros[2];
  const tablero4 = tableros[3];

  if (
    countRounds < 25 &&
    !verificarCartonLleno(tablero1) &&
    !verificarCartonLleno(tablero2) &&
    !verificarCartonLleno(tablero3) &&
    !verificarCartonLleno(tablero4)
  ) {
    let num = randomUniqueNumbers[arrayindex];
    arrayindex++;
    const element = document.getElementById("number_aleatorio");
    element.innerHTML = num;
    changeCell(num);
  } else {
    verificarPuntos();    
  }
}

function changeCell(aleatorio) {
  const cell = document.querySelectorAll(".board-cell");

  cell.forEach((cell) => {
    let number = cell.innerHTML;

    if (number == aleatorio) {
      cell.style.backgroundColor = "red";
    }
  });

  for (let i = 0; i < tableros.length; i++) {
    //Ahora cambiamos el valor dentro de la matriz

    if (i == 0) {
      const posicion = encontrarPosicion(tableros[0], aleatorio);

      if (posicion != -1) {
        tableros[0][posicion["fila"]][posicion["columna"]] = "x";

      }
    } else if (i == 1) {
      const posicion = encontrarPosicion(tableros[1], aleatorio);

      if (posicion != -1) {
        tableros[1][posicion["fila"]][posicion["columna"]] = "x";

      }
    } else if (i == 2) {
      const posicion = encontrarPosicion(tableros[2], aleatorio);

      if (posicion != -1) {
        tableros[2][posicion["fila"]][posicion["columna"]] = "x";

      }
    } else {
      const posicion = encontrarPosicion(tableros[3], aleatorio);

      if (posicion != -1) {
        tableros[3][posicion["fila"]][posicion["columna"]] = "x";
      }
    }
  }
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

function ocultarTablas(jugador) {
  if (jugador.id == "jugador1") {
    resetearValores();
    const jugador_tablero = document.getElementById("contenedor_jugador2");
    jugador_tablero.style.display = "none";

    const jugador_tablero3 = document.getElementById("contenedor_jugador3");
    jugador_tablero3.style.display = "none";

    const jugador_tablero4 = document.getElementById("contenedor_jugador4");
    jugador_tablero4.style.display = "none";
  } else if (jugador.id == "jugador2") {
    resetearValores();

    const jugador_tablero1 = document.getElementById("contenedor_jugador1");
    jugador_tablero1.style.display = "none";

    const jugador_tablero3 = document.getElementById("contenedor_jugador3");
    jugador_tablero3.style.display = "none";

    const jugador_tablero4 = document.getElementById("contenedor_jugador4");
    jugador_tablero4.style.display = "none";
  } else if (jugador.id == "jugador3") {
    resetearValores();
    const jugador_tablero = document.getElementById("contenedor_jugador2");
    jugador_tablero.style.display = "none";

    const jugador_tablero1 = document.getElementById("contenedor_jugador1");
    jugador_tablero1.style.display = "none";

    const jugador_tablero4 = document.getElementById("contenedor_jugador4");
    jugador_tablero4.style.display = "none";
  } else if (jugador.id == "jugador4") {
    resetearValores();
    const jugador_tablero = document.getElementById("contenedor_jugador2");
    jugador_tablero.style.display = "none";

    const jugador_tablero3 = document.getElementById("contenedor_jugador3");
    jugador_tablero3.style.display = "none";

    const jugador_tablero4 = document.getElementById("contenedor_jugador1");
    jugador_tablero4.style.display = "none";
  }
}

function resetearValores() {
  const jugador_tablero = document.getElementById("contenedor_jugador2");
  jugador_tablero.style.display = "flex";
  jugador_tablero.style.flexDirection = "column";

  const jugador_tablero3 = document.getElementById("contenedor_jugador3");
  jugador_tablero3.style.display = "flex";
  jugador_tablero3.style.flexDirection = "column";

  const jugador_tablero4 = document.getElementById("contenedor_jugador4");
  jugador_tablero4.style.display = "flex";
  jugador_tablero4.style.flexDirection = "column";

  const jugador_tablero1 = document.getElementById("contenedor_jugador1");
  jugador_tablero1.style.display = "flex";
  jugador_tablero1.style.flexDirection = "column";
}

function showDashboard() {
  countRounds = 0;
  const element_new = document.getElementById("Tablas");
  element_new.style.display = "none";

  const element = document.getElementById("form");
  element.style.display = "flex";

  element.style.flexDirection = "column";
  element.style.justifyContent = "center";
}

function verificarCartonLleno(matriz) {
  const n = matriz.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matriz[i][j] !== "x") {
        return false; // Se encontró un valor diferente de 'x'
      }
    }
  }

  return true; // Todos los valores son 'x'
}

function encontrarPosicion(matriz, valor) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] == valor) {
        return { fila: i, columna: j };
      }
    }
  }

  return -1; // Devuelve -1 si no se encuentra el valor en la matriz
}

function verificarDiagonalPrincipal(matriz) {
  const n = matriz.length;

  // Verificar la diagonal principal
  for (let i = 0; i < n; i++) {
    if (matriz[i][i] !== "x") {
      return false;
    }
  }

  return true;
}

function verificarDiagonalSecundaria(matriz) {
  const n = matriz.length;
  // Verificar la diagonal secundaria
  for (let i = 0; i < n; i++) {
    if (matriz[i][n - 1 - i] !== "x") {
      return false;
    }
  }
  return true;
}

function filasConX(matriz) {
  let contador = 0;

  for (let i = 0; i < matriz.length; i++) {
    let filaConX = true;

    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== "x") {
        filaConX = false;
        break;
      }
    }

    if (filaConX) {
      contador++;
    }
  }

  return contador;
}

function columnasConX(matriz) {
  let contador = 0;

  for (let j = 0; j < matriz[0].length; j++) {
    let columnaConX = true;

    for (let i = 0; i < matriz.length; i++) {
      if (matriz[i][j] !== "x") {
        columnaConX = false;
        break;
      }
    }

    if (columnaConX) {
      contador++;
    }
  }

  return contador;
}

function verificarPuntos(){

    const element = document.getElementById("Tablas");
    element.style.display = "none";

    const element1 = document.getElementById("puntajes");
    element1.style.display = "flex";

    for(let i=0 ; i<4 ; i++){

        if(i==0){
            	const lleno = verificarCartonLleno(tableros[0]);
                const principal = verificarDiagonalPrincipal(tableros[0]);
                const secundaria = verificarDiagonalSecundaria(tableros[0]);
                const filas = filasConX(tableros[0]);
                const columnas = columnasConX(tableros[0]);
                
                if(lleno){
                    puntos_player1 += 5;
                } if(principal){
                    puntos_player1 += 3;
                }if(secundaria){
                    puntos_player1 += 3;
                }if(filas != 0 || columnas != 0){
                    puntos_player1 += filas+columnas;
                }

                const jugadorpuntos= document.createElement('li');
                jugadorpuntos.innerHTML = document.getElementById("jugador1").value+ ": "+ puntos_player1;
                const lista = document.getElementById("Lista");
                lista.appendChild(jugadorpuntos);

        }else if(i == 1){

            const lleno = verificarCartonLleno(tableros[1]);
                const principal = verificarDiagonalPrincipal(tableros[1]);
                const secundaria = verificarDiagonalSecundaria(tableros[1]);
                const filas = filasConX(tableros[1]);
                const columnas = columnasConX(tableros[1]);
                
                if(lleno){
                    puntos_player2 += 5;
                } if(principal){
                    puntos_player2 += 3;
                }if(secundaria){
                    puntos_player2 += 3;
                }if(filas != 0 || columnas != 0){
                    puntos_player2 += filas+columnas;
                }

                const jugadorpuntos= document.createElement('li');
                jugadorpuntos.innerHTML = document.getElementById("jugador2").value+ ": "+ puntos_player2;
                const lista = document.getElementById("Lista");
                lista.appendChild(jugadorpuntos);
        }else if(i == 2){

            const lleno = verificarCartonLleno(tableros[2]);
                const principal = verificarDiagonalPrincipal(tableros[2]);
                const secundaria = verificarDiagonalSecundaria(tableros[2]);
                const filas = filasConX(tableros[2]);
                const columnas = columnasConX(tableros[2]);
                
                if(lleno){
                    puntos_player3 += 5;
                }if(principal){
                    puntos_player3 += 3;
                } if(secundaria){
                    puntos_player3 += 3;
                } if(filas != 0 || columnas != 0){
                    puntos_player3 += filas+columnas;
                }

                const jugadorpuntos= document.createElement('li');
                jugadorpuntos.innerHTML = document.getElementById("jugador3").value+ ": "+ puntos_player3;
                const lista = document.getElementById("Lista");
                lista.appendChild(jugadorpuntos);
        }else if(i == 3){

            const lleno = verificarCartonLleno(tableros[3]);
                const principal = verificarDiagonalPrincipal(tableros[3]);
                const secundaria = verificarDiagonalSecundaria(tableros[3]);
                const filas = filasConX(tableros[3]);
                const columnas = columnasConX(tableros[3]);
                
                if(lleno){
                    puntos_player4 += 5;
                }if(principal){
                    puntos_player4 += 3;
                } if(secundaria){
                    puntos_player4 += 3;
                }if(filas != 0 || columnas != 0){
                    puntos_player4 += filas+columnas;
                }

                const jugadorpuntos= document.createElement('li');
                jugadorpuntos.innerHTML = document.getElementById("jugador4").value+ ": "+ puntos_player4;
                const lista = document.getElementById("Lista");
                lista.appendChild(jugadorpuntos);
        }
    }

}