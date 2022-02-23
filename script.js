let options= ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)]
};
console.log(computerPlay());