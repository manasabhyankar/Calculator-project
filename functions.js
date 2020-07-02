let display = '0';
document.getElementById("result").textContent = display;
//Arithmetic functions
function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b==0){
        return "Error: Can't divide by zero!";
    }
    return a/b;
}
//Operation function
function operate(a, b, op){
    if(op == '+'){
        return add(a, b);
    }
    else if(op == '-'){
        return subtract(a, b);
    }
    else if(op == '*'){
        return multiply(a, b);
    }
    else if(op == '/'){
        return divide(a, b);
    }
}
//Helper parser function
function parseExpression(expr){
    for(let i=0; i<expr.length; i++){
        
    }
}
//Click functions
// console.log(document.getElementById("number-four").getAttribute("data-value"));
let cell = document.querySelector("#number-container").childNodes.forEach(cell => cell.addEventListener('click', () => {
    if(display == '0'){
        display = '';
        display += cell.getAttribute("data-value");
    }
    else{
        display += cell.getAttribute("data-value");
    }
    document.getElementById("result").textContent = display;
}));
let op_cell = document.querySelector("#ops-container").childNodes.forEach(op_cell => op_cell.addEventListener('click', () => {
    if(display == '0'){
        display = '';
        display += op_cell.getAttribute("data-value");
    }
    else{
        display += op_cell.getAttribute("data-value");
    }
    document.getElementById("result").textContent = display;
}));
let clear_button = document.getElementById("clear-button");
clear_button.addEventListener('click', () => {
    display = '0';
    document.getElementById("result").textContent = display;
    clear_button.style.backgroundColor = "khaki";
});
clear_button.addEventListener('mousedown', () => {
    clear_button.style.backgroundColor = "brown";
});
let equals_button = document.getElementById("equals-button");
equals_button.addEventListener('click', () => {
    console.log(display);
});
