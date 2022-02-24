
function computerPlay() {
    const options= ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
};
function playerPlay() {
    let question= window.prompt("Rock, Paper, or Scissors?");
    while (question.toLowerCase() !=="rock" || question.toLowerCase() !=="paper" || question.toLowerCase() !== "scissors")
    if (question.toLowerCase()=== "rock" || question.toLowerCase()==="paper" || question.toLowerCase()==="scissors") {
        return question
    } else {
        question= window.prompt("Not an option. Rock, Paper, or Scissors?");
    }
}

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


const playerSelection= playerPlay();
const computerSelection= computerPlay();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

let playerScore= 0;
let computerScore=0;
let tie=0;
function game() {
    for (i=0; i<5; i++) {
        const playerSelection= playerPlay();
        const computerSelection= computerPlay();
 
        let result=playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        } else {
            tie++;
        }
        console.log(playerScore);
        console.log(computerScore);
        console.log(tie);
        console.log(finalResult());
        if (playerScore===3 || computerScore===3) {
            break;
        }
    }
}
function finalResult() {
if (playerScore===3){
    return "Congrats! You're the Winner";
} else if (computerScore===3) {
    return "Sorry, you lost to a computer :(";
} else if (playerScore + computerScore + tie===5 && playerScore > computerScore) {
    return "Congrats! You're the Winner!";
} else if (playerScore + computerScore + tie===5 && playerScore < computerScore) {
    return "Sorry, you lost to a computer :(";
} else if (playerScore + computerScore + tie===5 && playerScore===computerScore){
    return "It's a draw!";
}
}
game();

