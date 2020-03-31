
const months = ['january', 'february', 'march', 'april', 'may',
    'june', 'july',
    'august', 'september', 'october',
    'november', 'december'];

var formulaForRandomMonth = months[Math.floor(Math.random() * months.length)];  //actual random word to guess
//What the user is guessing so far
var guessMonth = [];

var isReset=false;

//For length of month create empty (_) characters
for (var i = 0; i < formulaForRandomMonth.length; i++) {

    guessMonth[i] = "_"
}

var t = document.getElementById('guessword');
t.innerHTML = guessMonth.join(" ");

var wrongGuess = []; 

var guessesRemaining = 10;//Total guesses initialized to 10

var x = document.getElementById('remaining');
x.innerHTML = guessesRemaining;
 
var wins = 0;

var y = document.getElementById('numwins');
y.innerHTML = wins;


var z = document.getElementById('wrong');


document.onkeyup = function (event) {
    //Get player guess
    if(event.which<65 || event.which>90){return;} //Skip if not a letter
    var playerGuess = event.key ;
    
    //Match guess against each character is random month
    for (var i = 0; i < formulaForRandomMonth.length; i++) {

        if (formulaForRandomMonth[i] === playerGuess.toLowerCase()) {

            guessMonth[i] = playerGuess.toLowerCase();//If there is a match, then add player guess to what the user have so far
                        
        }
    }

     
    t.innerHTML = guessMonth.join(" ");
     
    //If character not present in random word
    if (formulaForRandomMonth.indexOf(playerGuess.toLowerCase()) == -1 ) {
        //If character is present find it is not undefined, therefore only add character if present (try to find it is undefined)
        if(wrongGuess.find((w) => w === playerGuess.toUpperCase())===undefined){
            wrongGuess.push(playerGuess.toUpperCase());
            guessesRemaining--;
            x.innerHTML = guessesRemaining;
            z.innerHTML = wrongGuess;
        }
        
         
    }

    //Is it victory?
    if (guessMonth.every((v, i) => v === formulaForRandomMonth[i])) {
        
        alert("You did it! You won! Good!");
        wins++; 
        y.innerHTML = wins;
        resetGame();        //Resets if user wins
    }

    else if (guessesRemaining === 0) {
        alert("You lost. Game Over...\nWrong guesses:" + wrongGuess.join(' '));
        resetGame();        //Resets if user loses
    }
 
}
 
function resetGame(){
    
    guessesRemaining = 10;
    x.innerHTML = guessesRemaining;  //Set html guesses remaining
    
    formulaForRandomMonth = months[Math.floor(Math.random() * months.length)];  //call random month
    guessMonth=[];
    //For length of month create empty (_) characters
    for (var i = 0; i < formulaForRandomMonth.length; i++) {

        guessMonth[i] = "_"
    }
    t.innerHTML = guessMonth.join(" ");      //Underlying spaces
 

    wrongGuess=[]
    z.innerHTML=wrongGuess;
}

