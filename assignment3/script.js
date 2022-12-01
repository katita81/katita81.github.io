


function generatePassword() {

  // asking the user for the password's number of characters.
  var numberCharacters = prompt("How many character would you like to have for your password?");
  // global variable to hold the arrays (special characters, number characters, lower case characters
  // and upper case characters)chosen by the user.
  var variablesTrack=[];
  //array for the final password.
  var password = [];
  
  //validate number of caracters for the password.
  if (numberCharacters === null || numberCharacters===""){
    return "";
  }
  
  // number of password characters should be between 8 and 129.
  if(!(numberCharacters >= 8 && numberCharacters<=129)){
    alert("Choose a number between 8 and 129");
    return "";
  }

  var userSpecialCharacters = confirm("Click OK if you want your password to include Special Characters");

  //if the user agrees to include special characters. the special character array is initialized.
  if(userSpecialCharacters){
    var specialCharacters = [
      '[', '`', '!', '@', '#', '$', '%',
      '^', '&', '*', '(', ')', '_', '+',
      '-', '=', '[', ']', '{', '}', ';',
      "'", ':', '"', '\\', '|', ',', '.',
      '<', '>', '/', '?', '~', ']', '/'];

    //all the special character's elements get added to the variablesTrack array.
      variablesTrack = variablesTrack.concat(specialCharacters);
   

  }

  // Same steps as showed for special characters, this time with numeric characters.
  var userNumericCharacters = confirm("Click OK if you want your password to include Numeric Characters");

  if (userNumericCharacters) {
   
    var numericCharacters = [];

    // variable "ascii0" holds the ascii code for character "0".
    var ascii0 = "0".charCodeAt(0);
    for (var i = 0; i < 10; i++){
      //ascii code number increases by 1
      var ascii = ascii0 + i;
      //ascii code number get converted to the respective string(number) and put inside the numeric characters array.
      numericCharacters.push(String.fromCharCode(ascii));
    }
    //numeric character elements are added to the array variblesTrack.
    variablesTrack = variablesTrack.concat(numericCharacters);

    
  }

  // Same steps as showed for numeric characters, this time with lower case characters.
  var userLowerCase = confirm("Click OK if you want your password to include Lower Case Letters");
  if (userLowerCase) {
    var lowerCaseCharacters = [];
    var asciia = "a".charCodeAt(0);
    for (var i = 0; i < 26; i++) {
      var ascii = asciia + i;
      lowerCaseCharacters.push(String.fromCharCode(ascii));
    }
    variablesTrack = variablesTrack.concat(lowerCaseCharacters);
    
  }



  // Same steps as showed for upper case characters, this time with upper case characters.
  var userUpperCase = confirm("Click OK if you want your password to include Upper Case Letters");
  if(userUpperCase) {
    var upperCaseCharacters = [];
    var asciiA = "A".charCodeAt(0);
    for (var i = 0; i < 26; i++) {
      var ascii = asciiA + i;
      upperCaseCharacters.push(String.fromCharCode(ascii));
    }

    variablesTrack = variablesTrack.concat(upperCaseCharacters);
    
  }
  console.log(variablesTrack);// console shows the array of total characters 

  if(variablesTrack.length === 0){//If the user doesnt choose any character criteria
    alert("You did not select any type of character. You must choose at least 1 type of character");

  }
  //loop for ramdonly getting the user defined "n" number of character for the final password.
  for(var i = 0; i < numberCharacters; i++ ){
    var random = Math.floor(Math.random() * variablesTrack.length);
     
     var variablesTrackElement = variablesTrack[random];
    // the elements gets added to the password array. 
    password.push(variablesTrackElement);
    
  }
  // the function returns the password array with joined elements. 
  return password.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
