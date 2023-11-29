//arrays
const COLOUR_DATABASE = ["red","yellow", "green", "blue", "pink","white"];
const LEVELS_DATABASE = ["easy","medium","hard","mastermind"];
let copy_COLOUR_DATABASE= Array.from(COLOUR_DATABASE);
let copy_two_COLOUR_DATABASE= Array.from(COLOUR_DATABASE);
let computerColourChoice = new Array (4); ;
let userColourChoice = new Array(4);
let messages= new Array (4);
//variables
let removeColourIndex;
let userHasWon= false;
let difficultyLevelChoiche;
let runningGameLevelChoiche;
//functions
const displayAlertWrongInput = (alertString = "") => alert(`Sorry Input NOT VALID ${alertString} `);

//user: welcome and choiche of coulors
alert("***** Welcome at Mastermind *****");

alert("*****Instructions: guess the 4 colours the computer has choosen. *****\n ***** Choose within: red yellow green blue pink white ******\n*****Hard level adds black color. Level mastermind add black and violet colour***** \n***** The colours choosen by the computer will be ALL different- *****");

do {
    difficultyLevelChoiche=prompt("Choose a level within: \n easy (max 20 attempts) \n medium (max 12 attempts) \n hard (max 8 attempts + 1 extra colour) \n mastermind (max 5 attempts + 2 extra colours)");

    if(!difficultyLevelChoiche) {
            displayAlertWrongInput("To quit the game exit or refresh page!");
        } else if (LEVELS_DATABASE.includes(difficultyLevelChoiche)===false) {
            displayAlertWrongInput("Valid inputs are:\n easy medium hard mastermind \nInputs are case sensitive");
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
        copy_COLOUR_DATABASE.push("black");
        COLOUR_DATABASE.push("black");
        break;
    case "mastermind":
        runningGameLevelChoiche=5;
        copy_COLOUR_DATABASE.push("black");
        copy_COLOUR_DATABASE.push("violet");
        COLOUR_DATABASE.push("black");
        COLOUR_DATABASE.push("violet");
        break;
    default:
        break;
}
//Computer colour array generator
for (let i = 0; i < computerColourChoice.length; i++) {
    removeColourIndex = Math.floor(Math.random() * copy_COLOUR_DATABASE.length);
    computerColourChoice[i] = copy_COLOUR_DATABASE.splice(removeColourIndex, 1)[0];
}

alert(computerColourChoice);

do {

    for (let i=0; i<userColourChoice.length; i++) {

        do {
            
            userColourChoice[i]= prompt("Choose within: \n" + COLOUR_DATABASE.join(" ")+ "\n at position:\n "+ 
            (i+1) +"/4 \n Your choiches are ==>\n " +userColourChoice.join("--") +
            "\n You have " + runningGameLevelChoiche+ " max attempts left!\n" +
            "----------");

            if (!userColourChoice[i]) {
                    displayAlertWrongInput("To quit the game exit or refresh page!");
                } else if (COLOUR_DATABASE.includes(userColourChoice[i])===false) {
                    displayAlertWrongInput("Valid inputs are: \nred yellow green blue pink white \nInputs are case sensitive");
                }

        } while (!userColourChoice[i] || COLOUR_DATABASE.includes(userColourChoice[i])===false)

        if (userColourChoice[i]===computerColourChoice[i]) {

                console.log(userColourChoice[i] + " is CORRECT in place n."+ (i+1));
                messages[i]=(userColourChoice[i] + " is CORRECT in place n."+ (i+1));
        
        } else  if (computerColourChoice.indexOf(userColourChoice[i])!==(-1) && userColourChoice[i]!==computerColourChoice[i]) {
    
                console.log(userColourChoice[i] + " is PRESENT but not in position: " + (i+1));
                messages[i]=(userColourChoice[i] + " is PRESENT but not in position: " + (i+1));
    
        } else {
                console.log(userColourChoice[i] + " is NOT part of solution");
                messages[i]=(userColourChoice[i] + " is NOT part of solution");
        }
    }

    alert(messages.join("\n"));
    
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
