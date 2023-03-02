const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || "scissors") {
        return userInput;
    } else {
        console.log("Error!");
    }
};
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
}
let player = 0;
let computer = 0;
function playerScore(userChoice, computerChoice) {
    if (determineWinner(userChoice, computerChoice) === "You won!") {
        player += 1;
    } 
    return player;
}

function computerScore(userChoice, computerChoice) {
    if (determineWinner(userChoice, computerChoice) === "The computer won!") {
        computer += 1;
    } 
    return computer;
}

const playGame = (userInput) => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    document.getElementById("playerThrew").innerHTML = userChoice;
    document.getElementById("computerThrew").innerHTML = computerChoice;
    document.getElementById("winner").innerHTML = determineWinner(userChoice, computerChoice);
    document.getElementById("yourWins").innerHTML = playerScore(userChoice, computerChoice);
    document.getElementById("computerWins").innerHTML = computerScore(userChoice, computerChoice);
};
