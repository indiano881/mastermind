
//MASTERMIND

const COLOUR_DATABASE = ["red","yellow", "green", "blue", "pink","white"];



//generated a random array with 4 colour
let computerColourChoice = ["empty-colour","empty-colour","empty-colour","empty-colour"];

for (let i=0; i<computerColourChoice.length; i++) {

    computerColourChoice[i]=COLOUR_DATABASE[Math.floor((Math.random()*COLOUR_DATABASE.length))];
}

console.log(computerColourChoice);
//user choice
alert("***** Welcome at Mastermind *****")

let userColourChoice = ["empty-colour","empty-colour","empty-colour","empty-colour"];
//insert test to check cancel ewmpty or wrong input!!!!
for (let i=0; i<userColourChoice.length; i++) {
    userColourChoice[i]= prompt("Which colour you want to choose at position"+ (i+1) +"/4?")
}
console.log(userColourChoice)


/*
do {

} while (userColourChoice!==computerColourChoice)
*/