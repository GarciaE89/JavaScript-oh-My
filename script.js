// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#%$&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var SpecialCheck;
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
    uppercaseCheck = prompt("Do you want upppercase letters?");
    uppercaseCheck = uppercaseCheck.toLowerCase();
    if (uppercaseCheck === null || uppercaseCheck === "") {
        alert("Do you you want uppercase letter Yes or No?");
        determineUppercase();
    } else if (uppercaseCheck === "yes") {
        uppercaseCheck = true;
        return uppercaseCheck;

    } else if (uppercaseCheck === "no") {
        uppercaseCheck = false;
        return uppercaseCheck;
    }
    else {
        alert("Please select Yes or No")
    }
    return uppercaseCheck;
}

function determineNumbers() {
    numberCheck = prompt("Do you want numbers?")
    numberCheck = numberCheck.toLocaleLowerCase();

    if (numberCheck === null){
        alert("Do you want numbers? Yes or No ");
    determineNumbers();
} else if (numberCheck === "yes") {
    numberCheck = true;
    return numberCheck;
}
else if (numberCheck === "no") {
    numberCheck = false;
    return numberCheck;
}
else {
    alert("Do you want numbers? Yes or No");
    determineNumbers();
}
return numberCheck;
}
function determineSpecial(){
    SpecialCheck = prompt ("Do you want a special characters?")
    SpecialCheck = SpecialCheck.toLocaleLowerCase();
    if (SpecialCheck === "yes"){
        SpecialCheck = true;
        return SpecialCheck;
    }
    else {
        SpecialCheck = false;
        return SpecialCheck;
    }
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
    if (uppercaseCheck && numberCheck && SpecialCheck) {
        characters += upperCase + numbers + specialCharacters;

    } else if (uppercaseCheck && numberCheck) {
        characters += upperCase + numbers;
;

    } else if (numberCheck && specialCheck) {
        characters += numbers + specialCharacters;
;

    } else if (uppercaseCheck && specialCheck) {
        characters += upperCase+ specialCharacters;
;
    } else if (uppercaseCheck) {
        characters += upperCase;

    } else if (numberCheck) {
        characters += numbers;

    } else if (specialCheck) {
        characters += specialCharacters;

    } else {
        characters = lowerCase;
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


