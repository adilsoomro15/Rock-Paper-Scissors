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
function determineGameWinner(userChoice, computerChoice) {
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

function playerScore() {
    let playerScore = 0;
    if (determineGameWinner() === "You won!") {
        playerScore += 1;
    }
}

function computerScore() {
    let computerScore = 0;
    if (determineGameWinner() === "The computer won!") {
        computerScore += 1;
    }
}

const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineGameWinner(userChoice, computerChoice));
    console.log("Your Wins: " + playerScore());
    console.log("Computer Wins: " + computerScore());
};
playGame();
