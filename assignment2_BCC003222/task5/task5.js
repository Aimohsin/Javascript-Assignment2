document.write("Guess Game<br>");

var secretNumber = 21;
var guessNumber = prompt("Guess a number?");
if(guessNumber == secretNumber){
    document.write("Bingo! Correct Answer");
}
else if (++guessNumber == secretNumber){
    document.write("Close enough to the correct anser");
}