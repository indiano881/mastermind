
const COLOUR_DATABASE = ["red","yellow", "green", "blue", "pink","white"];

//generated a random array with 4 colour
let computerColourChoice = ["empty-colour","empty-colour","empty-colour","empty-colour"];

for (let i=0; i<computerColourChoice.length; i++) {

    computerColourChoice[i]=COLOUR_DATABASE[Math.floor((Math.random()*COLOUR_DATABASE.length))];
}

console.log(computerColourChoice);
//user: welcome and choiche of coulurs
alert("***** Welcome at Mastermind *****")

let userColourChoice = new Array(4);
//insert while quality test
for (let i=0; i<userColourChoice.length; i++) {

        userColourChoice[i]= prompt("Choose within red--yellow--green--blue--pink--white-- at position"+ (i+1) +"/4? \n Your choiche are" +userColourChoice).toLocaleLowerCase();

}
console.log(userColourChoice)

// CHECKING IF IMPUT ARE VALID
