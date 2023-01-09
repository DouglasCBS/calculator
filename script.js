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
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "/":
            return divide(number1, number2);
        case "*":
            return multiply(number1, number2);
        default:
            console.log("Invalid operator.");
    }
};


