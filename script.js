// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable Declarations

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var generatePass = "";

// Function to generate desired number of characters in password

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to have?");
      if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Your password should have between 8-128 characters. Please try again.");
    var passwordLength = prompt("How many characters do you want your password to have?");
      } else {
        alert("Great! Just a few more questions before we generate your secure password.");
      }

// User selects which character type to include in their password

  var passwordLowerCase = confirm("Do you want to have lowercase letters in your password?");
      if (passwordLowerCase === true) {
        alert("Yay, you have selected that you want lowercase letters.");
      }
  var passwordUpperCase = confirm("Do you want to have uppercase letters in your password?");
      if (passwordUpperCase === true) {
        alert("Yay, you have selected that you want uppercase letters.");
      }
  var passwordNumber = confirm("Do you want to include numbers in your password?");
      if (passwordNumber === true) {
        alert("Yay, you have selected that you want numbers.")
      }
  var passwordChar = confirm("Do you want to include special characters in your password?");
      if (passwordChar === true) {
        alert("Yay, you have selected that you want special characters.")   
      }
    else if (passwordLowerCase === false && passwordUpperCase === false && passwordNumber === false && passwordChar === false) {
        alert("You must choose at least one criteria.");
  var passwordLowerCase = confirm("Do you want to have lowercase letters in your password?");
  var passwordUpperCase = confirm("Do you want to have uppercase letters in your password?");
  var passwordNumber = confirm("Do you want to include numbers in your password?");
  var passwordChar = confirm("Do you want to include special characters in your password?");
     } 
    
// Add parameters to an array

var generatePass = [];

if (passwordLowerCase === true) {
  generatePass.push(passwordLowerCase);
}

if (passwordUpperCase === true) {
  generatePass.push(passwordUpperCase);
}

if (passwordNumber === true) 
  generatePass.push(passwordNumber);
}

if (passwordChar === true) {
  generatePass.push(passwordChar);
}

