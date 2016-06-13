/**
 * JavaScript TMA
 */
var customerNumbers = 12;
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43); // adding the winningNumbers
//General message, winning numbers and customrer numbers.
var message = "This weeks\'s Winning Numbers are:\n\n" + winningNumbers + "\n\nThe Customer\'s Number is:\n\n" + customerNumbers;
//winning or loosing messages to display at the end of the comparisim.
var winningMessage = "\n\nWe have a match and Winner!";
var LoosingMessage = "\n\nSorry you are not a winner this week.";

var match = false;
//compare the winning number to the customer number 
//go through the loop untill the end of the array if match is not true.
for (var i = 0; i < winningNumbers.length && !match; i++) {
    if (customerNumbers == winningNumbers[i]) {
        match = true;
    }
}
//display the corosponding message.
if (match) {
    alert(message + winningMessage);
} else {
    alert(message + LoosingMessage);
}
