const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || "scissors") {
        return userInput;
    } else {
        console.log("Error!");
    }
}; // This function grabs the players input.
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
} // This function randomizes the computer's choice.
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
} // This funtion determines who won by matching the computer choice with the player choice.
let player = 0; // Declares the player score to be 0 at the start.
let computer = 0; // Declares the computer score to be 0 at the start.
function playerScore(userChoice, computerChoice) {
    if (determineWinner(userChoice, computerChoice) === "You won!") {
        player += 1;
    }
    return player;
} // If the player won it adds 1 to the score for the player.

function computerScore(userChoice, computerChoice) {
    if (determineWinner(userChoice, computerChoice) === "The computer won!") {
        computer += 1;
    }
    return computer;
} // If the computer won it adds 1 to the score for the computer.

const playGame = (userInput) => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    document.getElementById("playerThrew").innerHTML = userChoice;
    document.getElementById("computerThrew").innerHTML = computerChoice;
    document.getElementById("winner").innerHTML = determineWinner(
        userChoice,
        computerChoice
    );
    document.getElementById("yourWins").innerHTML = playerScore(
        userChoice,
        computerChoice
    );
    document.getElementById("computerWins").innerHTML = computerScore(
        userChoice,
        computerChoice
    );
}; // This function is the main function that runs everything else. On click of the images, it will get the user input, computer input and then change the text in the span tag to match it.
