/* LESSON 3 - Programming Tasks */

function add(number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

function subtract(number1, number2) {
    return number1 - number2;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

function multiply(number1, number2) {
    return number1 * number2;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

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

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


document.querySelector('#array').textContent = numbersArray;


document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

document.querySelector('#sumOfMultiplied').textContent = numbersArray
    .map(number => number * 2)
    .reduce((sum, number) => sum + number);
