let input = [0];
let output_total = 0;

let previousArray = [];
let currentArray = [];
let evaluateArray = [];

function calculator_buttons() {
    const zero = document.querySelector(".button-0");
    const one = document.querySelector(".button-1");
    const two = document.querySelector(".button-2");
    const three = document.querySelector(".button-3");
    const four = document.querySelector(".button-4");
    const five = document.querySelector(".button-5");
    const six = document.querySelector(".button-6");
    const seven = document.querySelector(".button-7");
    const eight = document.querySelector(".button-8");
    const nine = document.querySelector(".button-9");
    
    const button_add = document.querySelector(".button-add");
    const button_subtract = document.querySelector(".button-subtract");
    const button_multiply = document.querySelector(".button-multiply")
    const button_divide = document.querySelector(".button-divide");
    const button_operate = document.querySelector(".button-operate");

    zero.addEventListener("click", () => Input(zero.value))
    one.addEventListener("click", () => Input(one.value));   
    two.addEventListener("click", () => Input(two.value));
    three.addEventListener("click", () => Input(three.value));
    four.addEventListener("click", () => Input(four.value));
    five.addEventListener("click", () => Input(five.value));
    six.addEventListener("click", () => Input(six.value));
    seven.addEventListener("click", () => Input(seven.value));
    eight.addEventListener("click", () => Input(eight.value));
    nine.addEventListener("click", () => Input(nine.value));

    

    button_add.addEventListener("click", Add);
    button_subtract.addEventListener("click", Subtract);
    button_multiply.addEventListener("click", Multiply);
    button_divide.addEventListener("click", Divide);
    button_operate.addEventListener("click", Operate);

    screenFunction(undefined, JoinInput());
}

function screenFunction(topscreen = "- - - - - -", bottomscreen) {
    const SCREEN_OPERATIONS = document.querySelector(".screen-operations");
    const SCREEN = document.querySelector(".screen");

    SCREEN_OPERATIONS.textContent = topscreen;
    SCREEN.textContent = bottomscreen;
}


function JoinInput() {
    return parseInt(input.join(""));
}

function Clear() {
    input = [0];
    currentArray = [];
    evaluateArray = [];        
}

function checkArray() {
    switch (previousArray.length) {
        case 0:
            currentArray.push(JoinInput());
            evaluateArray.push(JoinInput());
            break;
        default:
            currentArray.push(previousArray, JoinInput());
            evaluateArray.push(output_total, JoinInput());
    }
}


function Input(value) {
    let parseInt_value = parseInt(value);
    let SCREEN = document.querySelector(".screen");

    switch (input[0]) {
        case 0:
            input[0] = parseInt_value;
            break;
        default:
            input.push(parseInt_value);
    }

    SCREEN.textContent = JoinInput();
}

function Add() {
    checkArray();
    
    let output = evaluateArray.reduce((previous, current) => {
        return previous + current;
    });
    output_total = output;

    let addition_array = currentArray.join(" + ");
    previousArray = addition_array;

    screenFunction(`${addition_array} = ${output}`, 0);
    Clear();
}

function Subtract() {
    checkArray();

    let output = evaluateArray.reduce((previous, current) => {
        return previous - current;
    });
    output_total = output;

    let subtraction_array = currentArray.join(" - ");
    previousArray = subtraction_array;

    screenFunction(`${subtraction_array} = ${output}`, 0);
    Clear();
}

function Multiply() {
    checkArray();

    let output = evaluateArray.reduce((previous, current) => {
        return previous * current;
    });
    output_total = output;

    let subtraction_array = currentArray.join(" × ");
    previousArray = subtraction_array;

    screenFunction(`${subtraction_array} = ${output}`, 0);
    Clear();
}

function Divide() {
    checkArray();

    let output = evaluateArray.reduce((previous, current) => {
        return previous / current;
    });
    output_total = output;

    let subtraction_array = currentArray.join(" ÷ ");
    previousArray = subtraction_array;

    screenFunction(`${subtraction_array} = ${output}`, 0);
    Clear();
}

function Operate() {
    screenFunction(output_total, 0);
    Clear();
}

calculator_buttons();