
//MASTERMIND

const colourDatabase = ["red","yellow", "green", "blue", "pink","white"];



//generated a random array with 4 colour
let computerColourChoice = ["empty-colour","empty-colour","empty-colour","empty-colour",];
for (let i=0; i<computerColourChoice.length; i++) {
    computerColourChoice[i]=colourDatabase[Math.floor((Math.random()*colourDatabase.length))];
}
console.log(computerColourChoice)