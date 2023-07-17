let evaluate = {
    input: [0],
    addition: [],
    subtraction: [],
}

const SCREEN = document.querySelector(".screen");
const SCREEN_OPERATIONS = document.querySelector(".screen-operations");

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

    SCREEN_OPERATIONS.textContent = " - - - - - - ";
    SCREEN.textContent = evaluate.input;
}

function Input(value) {
    let parseInt_value = parseInt(value);
    console.log(parseInt_value);
    switch (evaluate.input[0]) {
        case 0:
            evaluate.input[0] = parseInt_value;
            break;
        default:
            evaluate.input.push(parseInt_value);
    }

    SCREEN.textContent = evaluate.input.join("");
}

function Add() {

}

function Subtract() {

}

function Operate() {

}

calculator_buttons();