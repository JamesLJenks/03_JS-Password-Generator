// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = userInput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// CLASS ADVICE
// Write function for generatePassword
// generatePassword function has to return a string


var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Create function to randomize an array






// Function to intake and return user input

function userInput () {
  var passwordLength = prompt("How long would like your password to be?")
  console.log(passwordLength)
  var chooseNumbers = confirm("Would you like numbers in your password?")
  var chooseUpperCase = confirm("Would you like uppercase characters in your password?")
  var chooseLowerCase = confirm("Would you like lowercase characters in your password?")
  var chooseSymbols = confirm("Would you like symbols in your password?")

  var actualUserChoices = {
    // Left of the colon is key, right of the colon is value
    length: passwordLength,
    hasNumbers: chooseNumbers,
    hasUpperCase: chooseUpperCase,
    hasLowerCase: chooseLowerCase,
    hasSymbols: chooseSymbols
  }

  console.log(actualUserChoices);
}



// Function to combine user input and randomization and return a random password




