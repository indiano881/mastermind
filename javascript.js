//SISTEMARE COLOUR PRESENT????
const COLOUR_DATABASE = ["red","yellow", "green", "blue", "pink","white"];
const LEVELS_DATABASE = ["easy","medium","hard","mastermind"];
let computerColourChoice = new Array (4); ;
let userColourChoice = new Array(4);
let messages= new Array (4);
let userHasWon= false;
let difficultyLevelChoiche;
let runningGameLevelChoiche;

for (let i=0; i<computerColourChoice.length; i++) {

    computerColourChoice[i]=COLOUR_DATABASE[Math.floor((Math.random()*COLOUR_DATABASE.length))];
}    

const displayAlertWrongInput = (alertString = "") => alert(`Sorry Input NOT VALID ${alertString} `);

console.log(computerColourChoice);
//user: welcome and choiche of coulors
alert("***** Welcome at Mastermind *****");

alert("*****Instructions: guess the 4 colours the computer has choosen. *****\n ***** Choose within: red yellow green blue pink white ****** \n***** Same colours can be desplayed MORE than one time *****");

do {
    difficultyLevelChoiche=prompt("Choose a level within: \n easy (max 20 attempts) \n medium (max 12 attempts) \n hard (max 8 attempts) \n mastermind (max 5 attempts)");

    if(!difficultyLevelChoiche) {
            displayAlertWrongInput("To quit the game exit or refresh page!");
        } else if (LEVELS_DATABASE.includes(difficultyLevelChoiche)===false) {
            displayAlertWrongInput("Valid inputs are: easy medium hard mastermind \nInputs are case sensitive");
        }

} while (!difficultyLevelChoiche || LEVELS_DATABASE.includes(difficultyLevelChoiche)===false) 

switch (difficultyLevelChoiche) {
    case "easy":
        runningGameLevelChoiche=20;
        break;
    case "medium":
        runningGameLevelChoiche=12;
        break;
    case "hard":
        runningGameLevelChoiche=8;
        break;
    case "mastermind":
        runningGameLevelChoiche=5;
        break;
    default:
        break;
}

    console.log(userColourChoice);

do {

    for (let i=0; i<userColourChoice.length; i++) {

        do {
            
            userColourChoice[i]= prompt("Choose within: \n red--yellow--green--blue--pink--white-- \n at position:\n "+ 
            (i+1) +"/4 \n Your choiches are ==>\n " +userColourChoice.join("--") +
            "\n You have " + runningGameLevelChoiche+ " max attempts left!\n" +
            "----------");

            if (!userColourChoice[i]) {
                    displayAlertWrongInput("To quit the game exit or refresh page!");
                } else if (COLOUR_DATABASE.includes(userColourChoice)===false) {
                    displayAlertWrongInput("Valid inputs are: \nred yellow green blue pink white \nInputs are case sensitive");
                }

        } while (!userColourChoice[i] || COLOUR_DATABASE.includes(userColourChoice)===false)

        if (userColourChoice[i]===computerColourChoice[i]) {

                console.log(userColourChoice[i] + " is CORRECT in place n."+ (i+1));
                messages[i]=(userColourChoice[i] + " is CORRECT in place n."+ (i+1));
        
        } else  if (computerColourChoice.indexOf(userColourChoice[i])!==(-1) && userColourChoice[i]!==computerColourChoice[i]) {
    //qui un for loop?
                console.log(userColourChoice[i] + " is PRESENT but not in position: " + (i+1));
                messages[i]=(userColourChoice[i] + " is PRESENT but not in position: " + (i+1));
    
        } else {
                console.log(userColourChoice[i] + " is NOT part of solution");
                messages[i]=(userColourChoice[i] + " is NOT part of solution");
        }
    }

    alert(messages.join(" ==> "));
    
    console.log(messages);
    console.log("**************");
    runningGameLevelChoiche--;

    if (userColourChoice[0]===computerColourChoice[0] && 
        userColourChoice[1]===computerColourChoice[1] && 
        userColourChoice[2]===computerColourChoice[2] && 
        userColourChoice[3]===computerColourChoice[3] ) {

        userHasWon=true;
        console.log("congratulation! You Won!!");
        alert("Congratulation you won!!!!");

    } else  if (runningGameLevelChoiche===0) {

        userHasWon=false;
        alert ("Sorry you lost!");
        break;
    }

} while (userHasWon===false)


/*

Instructions
In this assignment we will create a Text Based JavaScript Game

Your knowledge of vanilla JS concepts such as variables, arrays, loops, conditional logic and the nesting of these will be tested. The concept of the game is entirely up to you, but I recommend something similar to a game like simplified Wordle, Mastermind or Hangman. Games like sten, sax, påse are also fine, but would require some kind of counter to break the while loop ie one iteration of a simple game like that would not meet the criteria for godkänt.

User input can be assumed to NOT include more than one occurrence of a character - if using numbers you can anticipate a sequence like 1234, if using letters a sequence of abcd. A sequence such as 1233 or 'hello' will not be inputted. More than one occurrence of a character will make comparison to an array a level higher in complexity than what is needed.

The game only needs to run via prompts and alerts - an external JS file loaded in the head section of an HTML page is all that is required. You can use the console. No HTML or CSS is required,  The game itself needs to rely on prompts for user input. If you want to run the game on a webpage using HTML, inputs and CSS feel free BUT IT WILL NOT LEAD TO A HIGHER GRADE. 

An understating of fundamental vanilla JS concepts is what you will be graded on, how it looks is irrelevant and will not be assessed

To achieve a Godkänt grade, your game must include:
One or more constants OK
One or more arrays OK
A random selection of an array index OK
A dynamic assignment of a variable (ie using prompt) OK
One or more while loops OK
One or more for loops OK
Comparison with user entered data OK
A final won/lost message. User input MUST be the determining factor in whether the user wins or loses OK

To achieve Väl Godkänt grade, your game must include the above and:
Comparison with an array - ie comparing user input to what is stored within an array. OK
Nested logic. Loops within loops. This kind of abstracted thinking is a daily occurrence in programming. OK
Input validation (eg if its a Wordle or Hangman type game only letters are valid input) OK
Cancel Button handling OK
Semantic variable naming OK
Consistent code style OK
Logical use of conditionals. OK

*/