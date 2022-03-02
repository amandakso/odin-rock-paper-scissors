let playerScore= 0;
let computerScore=0;
let playerSelection;

const rock= document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");

const container=document.querySelector("#container");

const msg=document.createElement("p");
msg.classList.add("message");
msg.textContent="";
container.appendChild(msg);

const pScore=document.createElement("p");
const cScore=document.createElement("p");
pScore.classList.add("score");
cScore.classList.add("score");
pScore.textContent="";
cScore.textContent="";
container.appendChild(pScore);
container.appendChild(cScore);

const reset=document.createElement("button");
reset.classList.add("reset");
reset.textContent="Play Again?"
reset.addEventListener("click", () => location.reload());

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

function computerPlay() {
    const options= ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
};


function playGame(playerSelection) {
    let computerSelection=computerPlay();
    playRound(playerSelection, computerSelection);
    if (playerScore==5) {
        msg.textContent="Congrats! You are the Winner!";
        document.getElementById("rock").disabled=true;
        document.getElementById("paper").disabled=true;
        document.getElementById("scissors").disabled=true;
        container.appendChild(reset);
    } else if (computerScore==5) {
        msg.textContent="Sorry. You lost to a computer.";
        document.getElementById("rock").disabled=true;
        document.getElementById("paper").disabled=true;
        document.getElementById("scissors").disabled=true;
        container.appendChild(reset);
    }
};


function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection==computerSelection) {
        result= `It\'s a tie! Both picked ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)}`;
        msg.textContent=result;
        pScore.textContent=`Player Score: ${playerScore}`;
        cScore.textContent=`Computer Score: ${computerScore}`;
    } else if (playerSelection=="paper" && computerSelection=="scissors" || playerSelection=="rock" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="rock") {
        result= `You Lose! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        msg.textContent=result;
        computerScore += 1;
        pScore.textContent=`Player Score: ${playerScore}`;
        cScore.textContent=`Computer Score: ${computerScore}`;
    } else {
        result= `You Win! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)}`;
        msg.textContent=result;
        playerScore += 1;
        pScore.textContent=`Player Score: ${playerScore}`;
        cScore.textContent=`Computer Score: ${computerScore}`;
    }
};

