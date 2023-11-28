
const COLOUR_DATABASE = ["red","yellow", "green", "blue", "pink","white"];
let computerColourChoice = ["empty-colour","empty-colour","empty-colour","empty-colour"];
let userColourChoice = new Array(4);
let placeholderColourMatch= new Array (4);
let userHasWon= false;
let difficultyLevelChoiche;
let runningGameLevelChoiche;

const computerColourGenerator = () =>{

    for (let i=0; i<computerColourChoice.length; i++) {

        return computerColourChoice[i]=COLOUR_DATABASE[Math.floor((Math.random()*COLOUR_DATABASE.length))];
    }    
}

const displayAlertWrongInput = () => alert("Sorry Input EMPTY or NOT VALID");



//user: welcome and choiche of coulurs
alert("***** Welcome at Mastermind *****");

alert("*****Istructions: guess the colours the computer has choosen. *****\n ***** Same colours can be desplayed MORE than one time *****");
//double pipeline to check input or cancel button, maybe a do while loop????
/*
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
        //possible to add a colour to a CONST????
        break;
    default:
        alert("Sorry Input EMPTY or NOT VALID");
}
*/
do {

    
    difficultyLevelChoiche=prompt("Choose a level within: \n easy (max 20 attempts) \n medium (max 12 attempts) \n hard (max 8 attempts) \n mastermind (max 5 attempts)");
    if(!difficultyLevelChoiche || 
        difficultyLevelChoiche!=="easy" &&
        difficultyLevelChoiche!=="medium" &&
        difficultyLevelChoiche!=="hard" &&
        difficultyLevelChoiche!=="mastermind" ) {
            displayAlertWrongInput();
        }

} while (!difficultyLevelChoiche || 
    difficultyLevelChoiche!=="easy" &&
    difficultyLevelChoiche!=="medium" &&
    difficultyLevelChoiche!=="hard" &&
    difficultyLevelChoiche!=="mastermind" ) 

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
            //possible to add a colour to a CONST????
            break;
        default:
            break;
    }
    

    















//insert while quality test
// iserrt a if (!usercolouChoice[i]) - meeage input empty or not valid
//inserire alert e console devono essere uguali
//record database???
//sistemare colour present


    console.log(userColourChoice);
    console.log(placeholderColourMatch);

    
   

do {

    for (let i=0; i<userColourChoice.length; i++) {

        userColourChoice[i]= prompt("Choose within: \n red--yellow--green--blue--pink--white-- \n at position "+ 
                            (i+1) +"/4? \n Your choiches are ==> " +userColourChoice.join("--") +
                            "\n You have " + runningGameLevelChoiche+ " max attempts left" );


        if (!userColourChoice[i] || 
            userColourChoice[i]!=="red" && 
            userColourChoice[i]!=="yellow" &&
            userColourChoice[i]!=="green" &&
            userColourChoice[i]!=="blue" &&
            userColourChoice[i]!=="pink" &&
            userColourChoice[i]!=="white") {
                alert("Sorry Input EMPTY or NOT VALID");

        } else if (userColourChoice[i]===computerColourChoice[i]) {
            placeholderColourMatch[i]=computerColourChoice[i];
            console.log(userColourChoice[i] + " is CORRECT in place n."+ (i+1));
    //inserire un else if in caso colore presente ma non al posto giusto
        
        } else  if (computerColourChoice.indexOf(userColourChoice[i])!==(-1) && userColourChoice[i]!==computerColourChoice[i]) {

            console.log(userColourChoice[i] + " is PRESENT but in an NOT in position: " + (i+1));
//sistemafre: se colore correct e uno rimette dice coporretto m non in posizione
        }
    }
    


    console.log("**************");

    runningGameLevelChoiche--;

    if (placeholderColourMatch[0]===computerColourChoice[0] && 
        placeholderColourMatch[1]===computerColourChoice[1] && 
        placeholderColourMatch[2]===computerColourChoice[2] && 
        placeholderColourMatch[3]===computerColourChoice[3] ) {
            
            userHasWon=true;
            console.log("congratulation! You Won!!")
    
        } else  if (runningGameLevelChoiche===0) {
            userHasWon=false;
            alert ("Sorry you lost!")
            break;
        } else {
            userHasWon=false;
        }


} while (userHasWon===false)

        
    


    console.log(computerColourChoice);
    console.log(userColourChoice);
    console.log(placeholderColourMatch);
    alert("break");

// CHECKING IF IMPUT ARE VALID



//winning system









/*






Instructions
In this assignment we will create a Text Based JavaScript Game

Your knowledge of vanilla JS concepts such as variables, arrays, loops, conditional logic and the nesting of these will be tested. The concept of the game is entirely up to you, but I recommend something similar to a game like simplified Wordle, Mastermind or Hangman. Games like sten, sax, påse are also fine, but would require some kind of counter to break the while loop ie one iteration of a simple game like that would not meet the criteria for godkänt.

User input can be assumed to NOT include more than one occurrence of a character - if using numbers you can anticipate a sequence like 1234, if using letters a sequence of abcd. A sequence such as 1233 or 'hello' will not be inputted. More than one occurrence of a character will make comparison to an array a level higher in complexity than what is needed.

The game only needs to run via prompts and alerts - an external JS file loaded in the head section of an HTML page is all that is required. You can use the console. No HTML or CSS is required,  The game itself needs to rely on prompts for user input. If you want to run the game on a webpage using HTML, inputs and CSS feel free BUT IT WILL NOT LEAD TO A HIGHER GRADE. 

An understating of fundamental vanilla JS concepts is what you will be graded on, how it looks is irrelevant and will not be assessed

To achieve a Godkänt grade, your game must include:
One or more constants
One or more arrays
A random selection of an array index
A dynamic assignment of a variable (ie using prompt)
One or more while loops
One or more for loops
Comparison with user entered data
A final won/lost message. User input MUST be the determining factor in whether the user wins or loses

An example of a Godkänt game would be sten, sax, påse vs the computer in a best of 5 competition. 

To achieve Väl Godkänt grade, your game must include the above and:
Comparison with an array - ie comparing user input to what is stored within an array.
Nested logic. Loops within loops. This kind of abstracted thinking is a daily occurrence in programming.
Input validation (eg if its a Wordle or Hangman type game only letters are valid input)
Cancel Button handling
Semantic variable naming
Consistent code style
Logical use of conditionals.

An example of a Väl Godkänt game would be a game similar to Hangman. To complete a game like that the index of an array that contains a specific letter must be displayed to the user.
*/