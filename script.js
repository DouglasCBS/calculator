let add = function(a, b) {
    return a + b;
};

let subtract = function(a, b) {
    return a - b;
};

let divide = function(a, b) {
    return a / b;
};

let multiply = function(a, b) {
    return a * b;
};

let operate = function(operator, number1, number2) {
    switch (operator) {
        case "+":
            return display.textContent = `${add(number1, number2)}`;
        case "-":
            return display.textContent = `${subtract(number1, number2)}`;
        case "/":
            return display.textContent = `${divide(number1, number2)}`;
        case "*":
            return display.textContent = `${multiply(number1, number2)}`;
        default:
            console.log("Invalid operator.");
    }
};

const display = document.querySelector(".display");

