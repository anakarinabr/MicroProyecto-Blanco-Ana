let tableros = [];

function generateBoard(size) {
  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    let tableroarray = [];
    const tablero = document.createElement("div");
    tablero.classList.add("table");

    for (let i = 0; i < size * size; i++) {

      const cell = document.createElement("div");
      if(i % 2 == 1){}
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



document
  .getElementById("players-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
    const player3 = document.getElementById("player3").value;
    const player4 = document.getElementById("player4").value;

    console.log("Jugadores:", player1, player2, player3, player4);
  });
