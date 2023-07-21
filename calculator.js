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
    const button_add = document.querySelector(".button-add");
    const button_subtract = document.querySelector(".button-subtract");
    const button_operate = document.querySelector(".button-operate");

    zero.addEventListener("click", () => {
        Input(zero.value);
    });

    one.addEventListener("click", () => {
        Input(one.value);
    });
    
    two.addEventListener("click", () => {
        Input(two.value);
    });

    three.addEventListener("click", () => {
        Input(three.value);
    });

    button_add.addEventListener("click", Add);
    button_subtract.addEventListener("click", Subtract);
    button_operate.addEventListener("click", Operate);

    screenFunction(undefined, JoinInput());
    let t1 = [0, 5].join(" + ");
    let t2 = [t1, 2, 3].join(" - ");
    let t3 = [t2, 10].join(" * ");

    //screenFunction(t3, undefined);
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

function Clear(option) {
    switch (option) {
        case "reset":
            return input = [0];

        default:
            currentArray = [];
            evaluateArray = [];
                
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
    currentArray.push(previousArray, JoinInput());
    evaluateArray.push(output_total, JoinInput());
    
    let output = evaluateArray.reduce((previous, current) => {
        return previous + current;
    });
    output_total = output;

    let addition_array = currentArray.join(" + ");
    previousArray = addition_array;

    screenFunction(`${addition_array} = ${output}`, `${Clear("reset")}`);
    Clear();
}

function Subtract() {
    currentArray.push(previousArray, JoinInput());
    evaluateArray.push(output_total, JoinInput());

    let output = evaluateArray.reduce((previous, current) => {
        return previous - current;
    });
    output_total = output;

    let subtraction_array = currentArray.join(" - ");
    previousArray = subtraction_array;

    screenFunction(`${subtraction_array} = ${output}`, `${Clear("reset")}`);
    Clear();
}

function Operate() {
    screenFunction(previousArray, output_total);
    console.log(previousArray);
}

calculator_buttons();