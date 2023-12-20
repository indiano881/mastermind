//arrays
const COLOUR_DATABASE = ["RED","ORANGE","YELLOW", "GREEN", "BLUE", "PURPLE","PINK"];
const LEVELS_DATABASE = ["easy","medium","hard","mastermind"];
let copy_COLOUR_DATABASE = Array.from(COLOUR_DATABASE);
let computerColourChoice = new Array (4);
let userColourChoice = new Array(4);
let messages = new Array (4);
let messagesCollector = [];

//variables
const EXTRA_COLOUR_ONE = "BLACK";
const EXTRA_COLOUR_TWO = "WHITE";
let removeColourIndex;
let userHasWon = false;
let difficultyLevelChoiche;
let runningGameLevelChoiche;
let roundCounter = 1;

//regex
let patternLevels= /^easy|medium|hard|mastermind$/i;

//functions
const displayAlertWrongInput = (alertString = "") => alert(`Sorry Input NOT VALID ${alertString} `);

const quitGame = () => {
    
        let answer= prompt("press Cancel again to quit or OK to go back");
        
        if (answer.trim() === " ") {
            window.history.back();
        } 
}

const addColours = ( item ) => {
    copy_COLOUR_DATABASE.push(item);
    COLOUR_DATABASE.push(item);
}
const startGame = () => {

    //user: welcome and choiches of coulors
    //inserire time out per flow
    

    //Difficulty-level choiches with validation
    do {

        difficultyLevelChoiche=prompt("Choose a level within:\n \n easy (max 14 attempts) \n medium (max 10 attempts) \n hard (max 7 attempts + 1 extra colour) \n mastermind (max 4 attempts + 2 extra colours) \n \n Otherwise press Cancel to quit");

        if(difficultyLevelChoiche===null) {

            quitGame();
            
        } else if (patternLevels.test(difficultyLevelChoiche)===false) {

            displayAlertWrongInput("Valid inputs are:\n"+ LEVELS_DATABASE.join(" "));
        }

    } while (difficultyLevelChoiche===null || patternLevels.test(difficultyLevelChoiche)===false) 

    //Difficulty-level menu
    switch (difficultyLevelChoiche.toLowerCase()) {

        case "easy":
            runningGameLevelChoiche = 14;
            break;

        case "medium":
            runningGameLevelChoiche = 10;
            break;

        case "hard":
            runningGameLevelChoiche = 7;
            addColours(EXTRA_COLOUR_ONE);
            break;

        case "mastermind":
            runningGameLevelChoiche= 4;
            addColours(EXTRA_COLOUR_ONE);
            addColours(EXTRA_COLOUR_TWO);
            break;

        default:
            break;
    }

    //Computer colour array generator
    for (let i = 0; i < computerColourChoice.length; i++) {
        removeColourIndex = Math.floor(Math.random() * copy_COLOUR_DATABASE.length);
        computerColourChoice[i] = copy_COLOUR_DATABASE.splice(removeColourIndex, 1)[0];
    }

    //Mastermind game
    do {

        for ( let i=0; i<userColourChoice.length; i++ ) {
        
            //User´s choiches with validation
            do {
           
            userColourChoice[i] = prompt("Choose within: \n" + COLOUR_DATABASE.join(" ") + 
            "\n at position:\n " + (i+1) +
            "/4 \n Your choiches are ==>\n " + userColourChoice.join("--") +
            "\n You have " + runningGameLevelChoiche+ " max attempts left!\n" +
            "----------");

                if (userColourChoice[i]===null) {

                    quitGame();

                } else if (COLOUR_DATABASE.includes(userColourChoice[i])===false) {

                    displayAlertWrongInput("Valid inputs are: \n" + COLOUR_DATABASE.join(" ") + "\nColour-inputs are case sensitive");

                }

            } while (userColourChoice[i]===null || COLOUR_DATABASE.includes(userColourChoice[i])===false)

            //User´s input-computer colours match
            if (userColourChoice[i]===computerColourChoice[i]) {

                messages[i] = (userColourChoice[i] + " is CORRECT in place n." + (i+1) + ". ");
                
            } else  if (computerColourChoice.indexOf(userColourChoice[i])!==(-1) && userColourChoice[i]!==computerColourChoice[i]) {

                messages[i] = (userColourChoice[i] + " is PRESENT but not in position: " + (i+1)+ ". ");
    
            } else {

                messages[i] = (userColourChoice[i] + " is NOT part of solution. ");

            }

            messagesCollector.push(messages[i]);
        }
    
        //Match messages collection and display
        alert(messages.join("\n"));
        messagesCollector.push("\n***************Round" + roundCounter + "*****************\n");
        alert(messagesCollector.join(""));
        
        //Counters inside the main do-while loop
        runningGameLevelChoiche--;
        roundCounter++;

        // Win loss control part
        if (userColourChoice[0]===computerColourChoice[0] && 
            userColourChoice[1]===computerColourChoice[1] && 
            userColourChoice[2]===computerColourChoice[2] && 
            userColourChoice[3]===computerColourChoice[3] ) {

            userHasWon=true;
            alert("Congratulation you won!!!!");
            $("h2").text("Congratulation you won!!!!");

        } else  if (runningGameLevelChoiche===0) {

            userHasWon = false;
            alert ("Sorry you lost!");
            $("h2").text("Sorry you lost");
            break;
        }

    } while (userHasWon===false)
}
$("h2").text("***** Welcome at Mastermind *****");
    $("h2").text("***Instructions: guess the 4 colours the computer has choosen. ***" +
    "\n ***Choose within: " + COLOUR_DATABASE.join(" ") +
    "***\n***Hard level adds: " + EXTRA_COLOUR_ONE +
    " Level mastermind adds: " + EXTRA_COLOUR_ONE + " and " + EXTRA_COLOUR_TWO +
    "*** \n***The colours choosen by the computer will be ALL different***");
$(".buttons-field .start-game").click(() => startGame());
