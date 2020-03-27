
const months = ['january', 'february', 'march', 'april', 'may',
    'june', 'july',
    'august', 'september', 'october',
    'november', 'december'];

var formulaForRandomMonth = months[Math.floor(Math.random() * months.length )];

var guessMonth = [];

    for (var i=0; i < formulaForRandomMonth.length; i++){

                    guessMonth[i] = "_"
    }

    var t = document.getElementById('guessword');
    t.innerHTML=guessMonth.join(" ");


    var wrongGuess = [];


    var guessesRemaining = 10;

        var x = document.getElementById('remaining');
            x.innerHTML= guessesRemaining;


    var wins = 0;

        var y = document.getElementById('numwins');
            y.innerHTML = wins;


    document.onkeyup = function(event){

        var playerGuess = event.key;

        for (var i=0; i <formulaForRandomMonth.length; i++){

            if (formulaForRandomMonth[i] === playerGuess) {

                guessMonth[i] = playerGuess;
            }
        }

            if (formulaForRandomMonth.indexOf(playerGuess) == -1){
                
                wrongGuess.push(playerGuess);
                guessesRemaining --;
                var z  = document.getElementById('wrong');
                z.innerHTML = wrongGuess;
            }

            if (guessMonth.every((v,i)=>v === formulaForRandomMonth[i]))  {

                    alert("You did it! You won! Good!");
                    wins ++;
            }
            
            else if (guessesRemaining === 0) {
                alert("You lost. Game Over...\nWrong guesses:" + wrongGuess.join(' '));
            }
            
        var t = document.getElementById('guessword');
            t.innerHTML=guessMonth.join(" ");

        
        var x = document.getElementById('remaining');
            x.innerHTML= guessesRemaining;
        

        console.log(formulaForRandomMonth.length);

    }

