/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) {
    return number1 * number2;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotalDue);

function getTotalDue() {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let membershipCheckbox = document.querySelector("#member");
    let discount = membershipCheckbox.checked ? 0.2 : 0;
    let totalDue = subtotal * (1 - discount);
    document.querySelector("#total").textContent = `Total: $${totalDue.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbersArray;

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of "odds"
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

// Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = numbersArray
    .map(number => number * 2)
    .reduce((sum, number) => sum + number);
