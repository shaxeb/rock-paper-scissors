let playerSelection = 0, humanScore = 0, computerScore = 0, computerSelection = 0;

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

function getHumanChoiceAndPlay(event) {
    const buttonId = event.target.id;
    playerSelection = buttonId;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

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

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener("click", getHumanChoiceAndPlay);
});


// function playGame() {
//     let humanScore = 0, computerScore = 0;

//     while (humanScore < 5 && computerScore < 5) {
//         const humanSelection = getHumanChoice();
//         if (humanSelection !== "Rock" && humanSelection !== "Paper" && humanSelection !== "Scissors") {
//             console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
//             continue;
//         }
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore === 5) {
//         console.log("Congratulations, you won the game!");
//     } else if (computerScore === 5) {
//         console.log("Oh no, the computer won the game!");
//     }
// }