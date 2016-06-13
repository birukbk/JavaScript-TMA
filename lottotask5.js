/**
 * JavaScript TMA
 */
var customerNumbers = 12;
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43); // adding the winningNumbers
//General message, winning numbers and customrer numbers.
var message = "This weeks\'s Winning Numbers are:\n\n" + winningNumbers + "\n\nThe Customer\'s Number is:\n\n" + customerNumbers;
//winning or loosing messages to display at the end of the comparison.
var winningMessage = "\n\nWe have a match and Winner!";
var LoosingMessage = "\n\nSorry you are not a winner this week.";

//set match to false globally
var match = false;

//The whole process is kicked off by this function, it calls checkNumbers function
function init() {
    checkNumbers(getCustomerNumber(), getWinningNumbers());
}
/**
 * checks the customerNumber value with the winningNumbers value and sets the match 
 * either to true or leaves it to be false.
 * @param  customerNumber 
 * @param  winningNumbers 
 * @return calls the displayResults function to display the message
 */
function checkNumbers(customerNumber, winningNumbers) {
    for (var i = 0; i < winningNumbers.length && !match; i++) {
        if (customerNumber == winningNumbers[i]) {
            match = true;
        }
    }
    return displayResult();
}
/**
 * returns the winning numbers
 * @return {[array]} [returns the winning numbers as array]
 */
function getWinningNumbers() {
    return winningNumbers;
}

/**
 * return customer number.
 * @return {[customerNumbers's type]} [the customerNumbers type will be returned]
 */
function getCustomerNumber() {
    return customerNumbers;
}

//display the appropriate message depending on the value of match.
function displayResult() {
    if (match) {
        alert(message + winningMessage);
    } else {
        alert(message + LoosingMessage);
    }
}
window.onload = init;
