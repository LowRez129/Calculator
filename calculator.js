let input = [0];

let previousState;
let currentState;

let previousValue;
let currentValue;
let previousArray = [];
let currentArray = [];

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
    const button_clear = document.querySelector(".button-clear");

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

    button_add.addEventListener("click", () =>{
        currentState = "add";
        checkValues();
        checkState();
        checkArray();
        Clear();
        previousState = currentState;
    });
    button_subtract.addEventListener("click", () =>{
        currentState = "subtract";
        checkValues();
        checkState();
        checkArray();
        Clear();
        previousState = currentState;
    });
    button_multiply.addEventListener("click", () =>{
        currentState = "multiply";
        checkValues();
        checkState();
        checkArray();
        Clear();
        previousState = currentState;
    });
    button_divide.addEventListener("click", () =>{
        currentState = "divide";
        checkValues();
        checkState();
        checkArray();
        Clear();
        previousState = currentState;
    });
    button_operate.addEventListener("click", Operate);
    button_clear.addEventListener("click", () => Clear("history"));

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

function Clear(value) {
    switch(value) {
        case "history":
            input = [0];
            previousValue = undefined;
            currentValue = undefined;
            previousArray = [];
            currentArray = [];
            screenFunction(undefined, 0);
            break;
        default:
            input = [0];
            currentArray = [];
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

    switch (previousValue) {
        case undefined:
            SCREEN.textContent = JoinInput();
            break;
        default:
            screenFunction(previousArray.join(""), JoinInput());
    }
}

function checkValues() {
    switch (previousValue) {
        case undefined:
            previousValue = JoinInput();
            currentArray.push(JoinInput(), undefined);
            break;
        default:
            currentValue = JoinInput();
            currentArray.push(currentValue, undefined);
    }
}

function checkState() {
    if (previousState == undefined) {
        previousState = currentState;
    }
    switch (previousState) {
        case "add":
            return Add();

        case "subtract":
            return Subtract();
        
        case "multiply":
            return Multiply();

        case "divide":
            return Divide();
    }
}

function checkArray() {
    switch (currentState) {
        case "add":
            previousArray.push(currentArray.join(" + "));
            screenFunction(`${previousArray.join("")}`, `= ${previousValue}`);
            break;

        case "subtract":
            previousArray.push(currentArray.join(" - "));
            screenFunction(`${previousArray.join("")}`, `= ${previousValue}`);
            break;
        
        case "multiply":
            previousArray.push(currentArray.join(" × "));
            screenFunction(`${previousArray.join("")} `, `= ${previousValue}`);
            break;

        case "divide":
            previousArray.push(currentArray.join(" ÷ "));
            screenFunction(`${previousArray.join("")}`, `= ${previousValue}`);
            break;
    }
}

function Add() {
    if (currentValue != undefined) {
        previousValue += currentValue;
    }
}

function Subtract() {
    if (currentValue != undefined) {
        previousValue -= currentValue;
    }
}

function Multiply() {
    if (currentValue != undefined) {
        previousValue *= currentValue;
    }
}

function Divide() {
    if (currentState != undefined) {
        switch (currentValue) {
            case 0:
                Clear();
                return screenFunction(previousArray, "Can't divide in zero");
            default:
                previousValue /= currentValue;
        }
    }
}

function Operate() {
    checkValues();
    checkState();
    checkArray();
    screenFunction(undefined, `= ${previousValue}`);
    Clear();
    previousState = currentState;
}

calculator_buttons();