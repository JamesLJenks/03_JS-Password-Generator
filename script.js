// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Create function to randomize an array

function shuffle (array) {
  // Randomizes the array based on the length and produces an integer
  var grabRandomIndex = Math.floor(Math.random () * array.length)
  // This converts the random index number to the true string value in the array
  var grabActualIndexValue = array [grabRandomIndex]
  
  // upperCase [7] = H   (This is what would be returned)
  return grabActualIndexValue;
}




// Function to intake and return user input

function userInput () {
  var passwordLength = parseInt( prompt("How long would like your password to be?"))
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be greater than 8 characters or less than 128 characters.")
    return;
  }

  var chooseNumbers = confirm("Would you like numbers in your password?")
  var chooseUpperCase = confirm("Would you like uppercase characters in your password?")
  var chooseLowerCase = confirm("Would you like lowercase characters in your password?")
  var chooseSymbols = confirm("Would you like symbols in your password?")

  if (!chooseNumbers && !chooseUpperCase && !chooseLowerCase && !chooseSymbols) {
    alert("Must have at least one character type.")
    return;
  }

  var actualUserChoices = {

    length: passwordLength,
    hasNumbers: chooseNumbers,
    hasUpperCase: chooseUpperCase,
    hasLowerCase: chooseLowerCase,
    hasSymbols: chooseSymbols
  }

  console.log(actualUserChoices);

  return actualUserChoices;
}



// Function to combine user input and randomization and return a random password

function generatePassword () {
  var userOptions = userInput ()
  var newPassword = []
  var possibleCharacters = []


  if (userOptions.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    // Into the possibleCharacters array, push a shuffled version of the numericCharacters array
    possibleCharacters.push(shuffle(numericCharacters))
  }

  if (userOptions.hasSymbols) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    // Into the possibleCharacters array, pushed a shuffled version of the numericCharacters array
    possibleCharacters.push(shuffle(specialCharacters))
  }
  
  if (userOptions.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase)
    // Into the possibleCharacters array, pushed a shuffled version of the numericCharacters array
    possibleCharacters.push(shuffle(upperCase))
  }

  if (userOptions.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase)
    // Into the possibleCharacters array, pushed a shuffled version of the numericCharacters array
    possibleCharacters.push(shuffle(lowerCase))
  }

  for (var i = 0; i < userOptions.length; i++) {
    var stagedPassword = shuffle(possibleCharacters)
    newPassword.push (stagedPassword)
  }
  console.log(newPassword);

  return newPassword.join("")
}


