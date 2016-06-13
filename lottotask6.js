/**
 * JavaScript TMA
 */
var customerNumbers = [];
customerNumbers.push(12, 17, 24, 37, 38,43);
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43); // adding the winningNumbers
//General message, winning numbers and customrer numbers.
var message = "This weeks\'s Winning Numbers are:\n\n" + winningNumbers + "\n\nThe Customer Numbers are:\n\n" + customerNumbers;
//matched number to display at the end of the comparison.
var MatchedMessage = "\n\nnumbers matched\n\n";
//start matched number with zero.
var match = 0;

//The whole process is kicked off by this function, it calls checkNumbers function
function init() {
    checkNumbers(getCustomerNumber(), getWinningNumbers());
}

/**
 * checks the customerNumber value with the winningNumbers value 
 * if found incriment match by one.
 * @param  {[array]}  customerNumber 
 * @param  {[array]}  winningNumbers 
 * @return calls the displayResults function to display the message
 */
function checkNumbers(customerNumber, winningNumbers) {
    for (var i = 0; i < winningNumbers.length; i++) {
        for (var j = 0; j < customerNumber.length; j++) {
            if (customerNumber[j] == winningNumbers[i]) {
                match++;
            }
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
 * returns the customer numbers
 * @return {[array]} [returns the customer numbers as array]
 */
function getCustomerNumber() {
    return customerNumbers;
}

//display the general message and the number of matched winning numbers.
function displayResult() {
    alert(message + MatchedMessage + match);
}
window.onload = init;
