/**
 * JavaScript TMA
 */
var customerNumbers = 12;
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43); // adding the winningNumbers
//prepared message with new line.
var message = "This weeks\'s Winning Numbers are:\n\n" + winningNumbers + "\n\nThe Customer\'s Number is:\n\n" + customerNumbers;
//winning or loosing messages to display at the end of the comparisim.
var winningMessage = "\n\nWe have a match and Winner!";
var LoosingMessage = "\n\nSorry you are not a winner this week.";

var match = false;
//comparing the custormer number to the winning numbers
if (customerNumbers == winningNumbers[0] || customerNumbers == winningNumbers[1] || customerNumbers == winningNumbers[2] || customerNumbers == winningNumbers[3] || customerNumbers == winningNumbers[4] || customerNumbers == winningNumbers[5]) {
    match = true;
}

//display the corosponding message.
if (match) {
    alert(message + winningMessage);
} else {
    alert(message + LoosingMessage);
}
