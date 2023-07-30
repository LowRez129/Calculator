let input = [0.0];
let decimal_point = false;

let previousState;
let currentState;

let previousValue;
let currentValue;
let numberArray = [];
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
    const point = document.querySelector(".button-point")
    
    const button_add = document.querySelector(".button-add");
    const button_subtract = document.querySelector(".button-subtract");
    const button_multiply = document.querySelector(".button-multiply")
    const button_divide = document.querySelector(".button-divide");
    const button_operate = document.querySelector(".button-operate");
    const button_clear = document.querySelector(".button-clear");

    zero.addEventListener("click", () => Input(0))
    one.addEventListener("click", () => Input(1));   
    two.addEventListener("click", () => Input(2));
    three.addEventListener("click", () => Input(3));
    four.addEventListener("click", () => Input(4));
    five.addEventListener("click", () => Input(5));
    six.addEventListener("click", () => Input(6));
    seven.addEventListener("click", () => Input(7));
    eight.addEventListener("click", () => Input(8));
    nine.addEventListener("click", () => Input(9));
    point.addEventListener("click", () => Input("."));

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

    screenFunction(undefined, "=");
}

function screenFunction(topscreen = "- - - - - -", bottomscreen) {
    const SCREEN_OPERATIONS = document.querySelector(".screen-operations");
    const SCREEN = document.querySelector(".screen");

    SCREEN_OPERATIONS.textContent = topscreen;
    SCREEN.textContent = bottomscreen;
}


function JoinInput() {
    return parseFloat(input.join(""));
}

function Clear(value) {
    switch(value) {
        case "history":
            input = [0];
            previousValue = undefined;
            currentValue = undefined;
            numberArray = [];
            decimal_point = false;
            screenFunction(undefined, 0);
            break;
        default:
            input = [0];
            decimal_point = false;

    }
           
}

function Input(value) {
    switch (value) {
        case ".":
            switch (decimal_point) {
                case false:
                    input.push(".");
                    decimal_point = true;
                    break;
                case true:
                    screenFunction(`${numberArray.join("")}${JoinInput()}`, "Decimal point already added.");
                    break;
            }
            break;

        default:
            switch (input[0]) {
                case 0:
                    input[0] = value; //parseInt_value;
                    break;
                default:
                    input.push(value); //(parseInt_value);
            }
    }

    switch (previousValue) {
        case undefined:
            screenFunction(JoinInput(), "=")
            break;
        default:
            screenFunction(`${numberArray.join("")}${JoinInput()}`, "=");
    }
    console.log(JoinInput(), decimal_point);
}

function checkValues() {
    switch (previousValue) {
        case undefined:
            previousValue = JoinInput();
            numberArray.push(JoinInput());
            break;
        default:
            currentValue = JoinInput();
            numberArray.push(currentValue);
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
            numberArray.push(" + ");
            screenFunction(`${numberArray.join("")}`, `= ${previousValue}`);
            break;

        case "subtract":
            numberArray.push(" - ");
            screenFunction(`${numberArray.join("")}`, `= ${previousValue}`);
            break;
        
        case "multiply":
            numberArray.push(" × ");
            screenFunction(`${numberArray.join("")} `, `= ${previousValue}`);
            break;

        case "divide":
            numberArray.push(" ÷ ");
            screenFunction(`${numberArray.join("")}`, `= ${previousValue}`);
            break;

        case "operate":
            numberArray.push(" = ");
            screenFunction(`${numberArray.join("")}`, `= ${previousValue}`);
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
                screenFunction(numberArray, "Can't divide in zero");
                break;
            default:
                previousValue /= currentValue;
        }
    }
}

function Operate() {
    currentState = "operate";
    checkValues();
    checkState();
    checkArray();
    screenFunction(undefined, `= ${previousValue}`);
    //Clear();
    previousState = currentState;
}

calculator_buttons();
let test = [1.2];
//test.push(.2);
test = parseFloat(test.join(""));
console.log(test);