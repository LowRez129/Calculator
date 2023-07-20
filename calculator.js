let evaluate = {
    input: [0],
    subtraction: [],
}

let previousArray = [];
let currentArray = [];

let previousValue = 0;
let currentValue = 0;

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
    return parseInt(evaluate.input.join(""));
}

function Clear(option) {
    switch (option) {
        case "reset":
            return evaluate.input = [0];

        default:
            return evaluate = {
                input: [0],
                previousArray: [],
                subtraction: [],
            };
    }
}


function Input(value) {
    let parseInt_value = parseInt(value);
    let SCREEN = document.querySelector(".screen");

    switch (evaluate.input[0]) {
        case 0:
            evaluate.input[0] = parseInt_value;
            break;
        default:
            evaluate.input.push(parseInt_value);
    }

    SCREEN.textContent = JoinInput();
}

function Add() {
    if (previousArray != []) {
        currentArray.push(previousArray);
    }
    
    currentValue = JoinInput();
    currentArray.push(currentValue);
    
    let output = previousValue + currentValue;
    previousValue = output;
    console.log(output);

    let addition_array = currentArray.join(" + ");

    screenFunction(`${addition_array} = ${output}`, `${Clear("reset")}`);
}

function Subtract() {
    evaluate.subtraction.push(JoinInput());
    let output = evaluate.subtraction.reduce((previousValue, currentValue) => { 
            return previousValue - currentValue 
    });

    let subtraction_array = evaluate.subtraction.join(" - ")

    screenFunction(`${subtraction_array} = ${output}`, `${Clear("reset")}`);
}

function Operate() {

}

calculator_buttons();