let input = new Array;

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

function Input(x) {
    const screen = document.querySelector(".screen");
    input.push(x);
    console.log(input);
    screen.textContent = `${input}`;
}

function add(x) {
    console.log(x);
}

calculator_buttons();
add(5);