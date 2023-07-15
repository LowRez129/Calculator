let input = ["0"];
let add_input = [];
let joined_input = input;
let evaluation;

const SCREEN = document.querySelector(".screen");
const SCREEN_OPERATIONS = document.querySelector(".screen-operations");

function SCREEN_RESET(){
    
};

function calculator_buttons() {
    const zero = document.querySelector(".button-0");
    const one = document.querySelector(".button-1");
    const two = document.querySelector(".button-2");
    const three = document.querySelector(".button-3");
    const button_add = document.querySelector(".button-add");
    const button_operate = document.querySelector(".button-operate");

    zero.addEventListener("click", () => {
        Input(zero.value);
    })

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

    SCREEN_OPERATIONS.textContent = "- - - - - -";
    SCREEN.textContent = joined_input;
}

function Input(value) {
    switch (input[0]) {
        case "0":
            input[0] = value;
            break;
        default:
            input.push(value);
    }
   
    joined_input = input.join("");
    SCREEN.textContent = `${joined_input}`;
}

function add() {
    add_input.push(parseInt(joined_input));
    input = ["0"];
    joined_input = input;
    SCREEN_OPERATIONS.textContent = `${add_input.join(" + ")}`;
    SCREEN.textContent = input;
}

function operate() {
    let all = parseInt(joined_input);
    
    add_input.forEach((value) => {
        all += value;
        console.log(value);
    })

    
    evaluation = all;
    console.log(input);
    clear();
    SCREEN_OPERATIONS.textContent = "- - - - - -";
    SCREEN.textContent = `= ${all}`;

}

function clear() {
    add_input = [];
    input = ["0"];
    joined_input = input;
}

calculator_buttons();