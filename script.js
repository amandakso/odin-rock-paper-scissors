
function computerPlay() {
    const options= ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==="rock" && computerSelection==="Paper") {
        return "You Lose! Paper beats Rock";
    } else {
        return "ARGH";
    };
};
const playerSelection= "rock";
const computerSelection= computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));