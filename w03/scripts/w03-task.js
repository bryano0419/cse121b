/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}



function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
    
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2){
    return subtract1 - subtract2
}


function subtractNumbers(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    
    return document.querySelector('#difference').value = subtract(subtract1, subtract2)

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    return document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;

let divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    return document.querySelector('#quotient').value = divide(dividend, divisor)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();

document.querySelector('#year').value = currentYear;



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

//     return numbersArray = numbersArray % 2;
// }

// numbersArray.filter(2)

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
