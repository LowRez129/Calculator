let input = new Array;
let add_input = new Array;
let joined_input;

function calculator_buttons() {
    const one = document.querySelector(".button-1");
    const two = document.querySelector(".button-2");
    const three = document.querySelector(".button-3");
    //console.log(one);
    one.addEventListener("click", () => {
        Input(one.value);
    });
    
    two.addEventListener("click", () => {
        Input(two.value);
    });

    three.addEventListener("click", () => {
        Input(three.value);
    });
}

function Input(value) {
    const screen = document.querySelector(".screen");

    input.push(value);
    joined_input = input.join("");
    screen.textContent = `${joined_input}`;
}

function add() {
    const button_add = document.querySelector(".button-+");
    add_input = joined_input;
}

function operate(input, add) {
    const button_operate = document.querySelector(".button-=");
}

calculator_buttons();