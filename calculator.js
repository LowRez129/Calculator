let input = new Array;
let add_input = new Array;
let joined_input;
const screen = document.querySelector(".screen");

function calculator_buttons() {
    const one = document.querySelector(".button-1");
    const two = document.querySelector(".button-2");
    const three = document.querySelector(".button-3");
    const button_add = document.querySelector(".button-add");
    const button_operate = document.querySelector(".button-operate");

    one.addEventListener("click", () => {
        Input(one.value);
    });
    
    two.addEventListener("click", () => {
        Input(two.value);
    });

    three.addEventListener("click", () => {
        Input(three.value);
    });

    button_add.addEventListener("click", add);
    button_operate.addEventListener("click", operate);

    screen.textContent = "Empty Input";
}

function Input(value) {
    input.push(value);
    joined_input = input.join("");
    screen.textContent = `${joined_input}`;
}

function add() {
    if (joined_input == null) {
        return;
    } 
    add_input.push(parseInt(joined_input));
    console.log(add_input);
    input = [];
    screen.textContent = `${add_input.join(" + ")}`;
}

function operate() {
    //screen.textContent = `${add_input}`;
}

calculator_buttons();