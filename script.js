let options= ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)]
};
console.log(computerPlay());

let question= prompt("Rock, Paper, or Scissors?");
let userChoice= question.toLowerCase();
console.log(question);
console.log(userChoice);
function userPlay() {
    if (userChoice === "rock"|| userChoice ==="paper" || userChoice==="scissors") {
        return userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    } else {
        return prompt("Not an option. Try again");
    }
}
console.log(userPlay());



