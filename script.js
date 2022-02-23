let options= ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)]
};
console.log(computerPlay());
let question= prompt("Rock, Paper, or Scissors?");
let userChoice= question.toLowerCase();
console.log(question);
console.log(userChoice);


