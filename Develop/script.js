// Assignment code here

//function
function generatePassword() {

  var confirmUpper = confirm("Would you like Uppercase letters?");
  if (confirmUpper === true) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log('yes');
  } else {
    console.log('no');
  };

  var confirmLower = confirm("Would you like Lowercase letters?");
  if (confirmLower) {
    charSet = "abcdefghijklmnopqrstuvwxyz"
    console.log('yes');
  } else {
    console.log('no');
  };

  var confirmNum = confirm("Would you like to add numbers?");
  if (confirmNum) {
    charSet = "0123456789"
    console.log('yes');
  } else {
    console.log('no');
  };

  var confirmspecial = confirm("Would you like to add Special Characters?");
  if (confirmspecial) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    console.log('yes');
  } else {
    console.log('no');
  };

  var confirmLenght = Number(prompt("How Long would you like your password? (8-128)"));
  if (confirmLenght >= 8 && confirmLenght <= 128) {
    console.log(confirmLenght);
  } else {
    window.alert("Please enter a number with in the recommended number range!");
  };
};


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

