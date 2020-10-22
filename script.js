// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable Declarations

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordLength;
var passwordNumber;
var passwordChar
var passwordLowerCase;
var passwordUpperCase;

// Function to generate desired number of characters in password

function writePassword() {
  var passwordLength = prompt("How many characters do you want your password to have?");
      if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Your password should have between 8-128 characters. Please try again.");
    var passwordLength = prompt("How many characters do you want your password to have?");
      } else {
        alert("Great! Just a few more questions before we generate your secure password.");
      }

    }


