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

const display = document.querySelector(".display");
const digit = document.querySelectorAll(".digit");
const btn = document.querySelectorAll(".btn");
const oprtr = document.querySelectorAll(".oprtr");

btn.forEach(key => key.addEventListener("click", transitionAdd));
btn.forEach(key => key.addEventListener("transitionend", () => key.classList.remove("clicking")));
digit.forEach(key => key.addEventListener("click", keyDown))
oprtr.forEach(key => key.addEventListener("click", oprtrDown))

let displayValue = "";
let temp = "";
let tempOperator = "";
function keyDown() {
    displayValue += this.textContent
    display.textContent = displayValue
    if (displayValue.length > 10) {displayValue = ""}
};

function oprtrDown() {
    verifyBtn(this)
};

function verifyBtn(e) {
    if (e.textContent === "C") {
        displayValue = "";
        temp = "";
        tempOperator = "";
        display.textContent = displayValue ;
    }
    else if (e.textContent === "+" || e.textContent === "-" || e.textContent === "/" || e.textContent === "*") {
        if (temp !== "" && displayValue !== "" && tempOperator !== "") {
            executeOperation()
            temp = displayValue
        }
        else if(displayValue !== "") {
            temp = displayValue
        }
        displayValue = ""
        tempOperator = e.textContent
    }
    else executeOperation();
};

function executeOperation() {
    
        if (tempOperator === "" || displayValue === "" || temp === "") {
            displayValue = ""
            display.textContent = "what"
        }
        else {displayValue = operate(tempOperator, parseInt(temp), parseInt(displayValue));
        displayValue = +displayValue.toFixed(10);
        display.textContent = displayValue;
        tempOperator = "";
    }
}

function transitionAdd() {
    return this.classList.add("clicking")
};

