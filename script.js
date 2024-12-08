function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Welcome to rock, paper, scissors. Enter your choice to play against the computer");
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }
        console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    }

    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        if (humanSelection !== "Rock" && humanSelection !== "Paper" && humanSelection !== "Scissors") {
            console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
            continue;
        }
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
        console.log("Congratulations, you won the game!");
    } else if (computerScore === 5) {
        console.log("Oh no, the computer won the game!");
    }
}

playGame();
