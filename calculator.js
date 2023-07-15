let input = ["0"];
let add_input = [];
let minus_input = [];
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
    const button_minus = document.querySelector(".button-minus");
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
    button_minus.addEventListener("click", minus);
    button_operate.addEventListener("click", operate);

    SCREEN_OPERATIONS.textContent = "- - - - - -";
    SCREEN.textContent = input;
}

function Input(value) {
    switch (input[0]) {
        case "0":
            input[0] = value;
            break;
        default:
            input.push(value);
    }
   
    SCREEN.textContent = `${input.join("")}`;
}

function add() {
    let joined_input = input.join("");
    add_input.push(parseInt(joined_input));
    input = ["0"];
    joined_input = input;
    SCREEN_OPERATIONS.textContent = `${add_input.join(" + ")}`;
    SCREEN.textContent = input;
}

function minus() {
    let joined_input = input.join("");
    minus_input.push(parseInt(joined_input));
    input = ["0"];
    joined_input = input;
    SCREEN_OPERATIONS.textContent = `${minus_input.join(" - ")}`;
    SCREEN.textContent = input;
}

function operate() {
    let joined_input = input.join("");
    let all = 0;
    
    add_input.forEach((value) => {
        all += value;
    });

    minus_input.forEach((value) => {
        all -= value;
    });
    
    //all += parseInt(joined_input)

    evaluation = all;
    console.log(evaluation);
    clear();
    SCREEN_OPERATIONS.textContent = "- - - - - -";
    SCREEN.textContent = `= ${all}`;

}

function screen_operations() {

}

function clear() {
    input = ["0"];
    add_input = [];
    minus_input = [];
}

calculator_buttons();