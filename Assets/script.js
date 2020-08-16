var specialCharacters = document.getElementById('specializzy');
var numbers = document.getElementById('nizzy');
var lowerCase = document.getElementById('lowizzy');
var upperCase = document.getElementById('upizzy');
var passwordLength = document.getElementById('lizzy');
var result = document.getElementById('password');
var generateHTML = document.getElementById('generate');
var userInput = {
    symbol: generateSpecialCharacters,
    number: generateNumber,
    lower: generateLowerCase,
    upper: generateUpperCase
};

//Check to see which boxes are checked
generateHTML.addEventListener('click', () => {
    var checkSpecialCharacters = specialCharacters.checked; 
    var checkNumber = numbers.checked; 
    var checkLowerCase = lowerCase.checked; 
    var checkUpperCase = upperCase.checked; 
    var checkLength = +passwordLength.value;
    result.innerText = generatePassword(checkSpecialCharacters, checkNumber,  checkLowerCase, checkUpperCase, checkLength);
});

// Random generation functions (Math.random() from class 3.21 & Math.floor() from class 3.23)
// Bowser Character Set Reference: http://www.net-comber.com/charset.html
function generateSpecialCharacters(){
    var special = ")$%^(&*[]=<>/,{@#.?}!"
    return special[Math.floor(Math.random() * special.length)]; 
}

function generateNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}

function generateLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}

function generateUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}

//Password generation function
function generatePassword(symbol, number, lower, upper, length) {
    let passwordGenerated = '';
    var userBoxesChecked = symbol + number + lower + upper; 
    var boxesCheckedArr = [{symbol}, {number}, {lower}, {upper}].filter (item => Object.values(item)[0]); 

    if(userBoxesChecked === 0){ 
    alert ('Select at least one below');
    return;
    }

    for(let i = 0; i < length; i += userBoxesChecked){
        boxesCheckedArr.forEach(type => {
            var boxesInput = Object.keys(type)[0];
            passwordGenerated += userInput[boxesInput]()
        });
    }

    var finalPasswordGenerated = (passwordGenerated.slice(0, length));

    if(finalPasswordGenerated.length < 8 || finalPasswordGenerated.length > 128){ 
        alert ('Password length must be between 8-128 characters');
        return;
    } 

    return finalPasswordGenerated
}