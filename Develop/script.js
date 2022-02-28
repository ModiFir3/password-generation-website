// Assignment code here

//function
function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charSet = "";
  var passResults = "";

  var confirmLenght = prompt("How Long would you like your password? (8-128)");
  //confirm lenght
  if (confirmLenght >= 8 && confirmLenght <= 128) {
    console.log(confirmLenght);
  } else {
    window.alert("Please enter a number with in the recommended number range!");
    return generatePassword();
  };

  //number
  var confirmNum = confirm("Would you like to add numbers?");
  if (confirmNum) {
    charSet = charSet.concat(num);
  };

  //special
  var confirmspecial = confirm("Would you like to add Special Characters?");
  if (confirmspecial) {
    charSet = charSet.concat(special);
  };

  //uppercase
  var confirmUpper = confirm("Would you like Uppercase letters?");
  if (confirmUpper) {
    charSet = charSet.concat(upper);
  };

  //lowercase
  var confirmLower = confirm("Would you like Lowercase letters?");
  if (confirmLower) {
    charSet = charSet.concat(lower);
  };

  if (charSet.length === 0) {
    window.alert("Must input at least one criteria!");
    return generatePassword();
  }

  console.log(charSet);

  //math return value
  for (var i = 0; i < confirmLenght; i++) {
    var random = Math.floor(Math.random() * charSet.length);
    var result = charSet[random];
    var passResults = passResults.concat(result);
    console.log(random);
    console.log(result);
  };

  return passResults
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
