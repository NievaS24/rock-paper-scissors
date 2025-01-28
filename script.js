let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector("#container");
const playerDisplay = document.querySelector("#playerChoice");
const score = document.querySelector("#score");
const computerDisplay = document.querySelector("#computerChoice");
buttons.addEventListener("click", (event) => {
    const playerChoice = event.target.id;
    if (playerChoice != "container") {
        playRound(playerChoice, getComputerChoice());
    }
});

function getComputerChoice (){
    const number = Math.floor(Math.random() * 3);
    let choice;
    switch (number) {
        case 0 :
            choice = "piedra";
        break;
        case 1 :
            choice = "papel";
        break;
        case 2 :
            choice = "tijera";
        break;
    }
    return choice;
}

function playRound (playerChoice, computerChoice){
    score.style.backgroundColor = "#00000080";
    function playerWin () {
        if (playerChoice === "piedra" && computerChoice === "tijera" ||
            playerChoice === "tijera" && computerChoice === "papel" ||
            playerChoice === "papel" && computerChoice === "piedra") {
                return "win";
        } else if (playerChoice === "piedra" && computerChoice === "papel"||
            playerChoice === "papel" && computerChoice === "tijera" ||
            playerChoice === "tijera" && computerChoice === "piedra") {
                return "loose";
        } else {
                return "draw";
        }
    }
    if (playerWin() === "win") {
        playerScore++;
    } else if (playerWin() === "loose") {
        computerScore++;
    }
    playerDisplay.textContent = playerChoice.toUpperCase();
    score.textContent = playerScore + " - " + computerScore;
    computerDisplay.textContent = computerChoice.toUpperCase();
    
    if (playerScore === 5) {
        score.style.backgroundColor = "green";
        score.style.color = "white";
        score.textContent = "GANASTE " + playerScore + " A " + computerScore;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        score.style.backgroundColor = "red";
        score.style.color = "white";
        score.textContent = "PERDISTE " + computerScore + " A " + playerScore ;
        playerScore = 0;
        computerScore = 0;       
    }
}

