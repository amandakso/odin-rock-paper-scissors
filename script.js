
function computerPlay() {
    const options= ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase()==="rock") {
        if (computerSelection==="Paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection.toLowerCase()==="paper") {
        if (computerSelection==="Rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection.toLowerCase()==="scissors") {
        if (computerSelection==="Rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
};
const playerSelection= "rock";
const computerSelection= computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (i=0; i<5; i++) {
        const playerSelection= "rock";
        const computerSelection= computerPlay();
        let playerScore= 0;
        let computerScore=0;
        let tie=0;
        let result=playRound(playerSelection, computerSelection);
        console.log(result);

    }
}
game();

