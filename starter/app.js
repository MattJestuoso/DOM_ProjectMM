//Contador del jugador uno.
//Crear un objeto el cual contenta el puntaje del primer jugador
//Selecionar el boton del jugador uno
//Selecionar el display del jugador uno
const p1 = {
score : 0,
button : document.querySelector("#p1button"),
display : document.querySelector("#p1display"),
}

//Contador del jugador dos.
//Crear un objeto el cual contenta el puntaje del segundo jugador
//Seleccionar el boton del jugador dos
//Selecionar el display del jugador dos
const p2 = {
score : 0,
button : document.querySelector("#p2button"),
display : document.querySelector("#p2display"),
}

//Selecionar el boton de reset
const resetButton = document.querySelector("#resetButton");

// Selecionar el texto de quien juega
const playTo = document.querySelector("#playTo");

// // Declarar variable de cuantos juegos se haran
let winningScore = 3;

// //Declarar booleano para saber si el juego termino o no
let isGameOver = false;

//Funcion para actualizar los scores, debe cambiar los colores si el juego termino!
// 'has-text-success' (Color verde)
// 'has-text-danger' (Color rojo)
// Si un score llega al winning score, es game over!
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//Poner la funcion update scores a los botones de ambos jugadores!
p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }
});

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
        }
    }
});


//Poner la funcion de reset al boto nde reset
playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

// resetButton.addEventListener("click", reset);
resetButton.addEventListener("click", reset);

// // Funcion para reiniciar todo!
function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}
