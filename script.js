
function computerPlay() {
    const options= ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
};
//change playerPlay to return correct choice when clicking selected button
/* function playerPlay() {
    let question= window.prompt("Rock, Paper, or Scissors?");
    while (question.toLowerCase() !=="rock" || question.toLowerCase() !=="paper" || question.toLowerCase() !== "scissors")
    if (question.toLowerCase()=== "rock" || question.toLowerCase()==="paper" || question.toLowerCase()==="scissors") {
        return question
    } else {
        question= window.prompt("Not an option. Rock, Paper, or Scissors?");
    }
}
*/

/* when player clicks button, console.log (button.id);
playerSelection= ^console.log;

*/

const rock= document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection==computerSelection) {
        result= "It\'s a tie!";
    } else if (playerSelection=="paper" && computerSelection=="scissors" || playerSelection=="rock" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="rock") {
        result= "You Lose!"
    } else {
        result= "You Win!"
    }
}


/* const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors"); */




/*const choices= ["rock", "paper", "scissors"]
function playerPlay(num) {
    let found= choices.find(element => element=num);
    return found;
}; */

/*rock.addEventListener("click", () => playerPlay("rock"));
paper.addEventListener("click", () => playerPlay(1));
scissors.addEventListener("click", () => playerPlay(2)); */


/*
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

const playerSelection= button.id;
const computerSelection= computerPlay()


console.log(computerSelection); */
console.log(playerSelection);
//console.log(playRound(playerSelection, computerSelection));



/*

let playerScore= 0;
let computerScore=0;
let tie=0;
function game() {
    for (;;) {
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
*/


