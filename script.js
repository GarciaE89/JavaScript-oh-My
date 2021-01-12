// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#%$&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength;
var uppercaseCheck = false;
var numberCheck = false;
var SpecialCheck = false;
// the function below should provide guidance on password length
function pwLength() {
    passwordLength = prompt("what is the desired password length? (Must be between 8-128 Characters):");

    if (passwordLength < 8) {
        alert("Password should be at least 8 charaters long");
        pwLength();
    } else if (passwordLength > 128) {
        alert("Password cannot exceed 128 charaters");
        pwLength();
    } else {
        alert("Select character types")
        return passwordLength;
    }

}
// with the below function we are asking the user if they want uppercase letters


function uppercase() {
    uppercaseCheck = confirm("Do you want upppercase letters?");
    
    return uppercaseCheck;
}

function determineNumbers() {
    numberCheck = confirm ("Do you want numbers Yes or No?")
    
return numberCheck
}
function determineSpecial(){
    SpecialCheck = confirm ("Do you want a special characters Yes or No?")
    
        return SpecialCheck;
    
}

function generatePassword() {
    pwLength();
    console.log(pwLength);
    uppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(SpecialCheck);

    var characters = lowerCase;
    var password = "";
    if (!uppercaseCheck && !numberCheck && !SpecialCheck) {
        return;

    } 
    if (uppercaseCheck) {
        characters += upperCase 
;

    } 
     if (numberCheck) {
        characters += numbers;
;

    } if (uppercaseCheck) {
        characters += upperCase;
;
    }

     
    if (SpecialCheck) {
        characters += specialCharacters;

    } 

    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


