let display = '0';
document.getElementById("result").textContent = display;
let clear_button = document.getElementById("clear-button");
let equals_button = document.getElementById("equals-button");
let delete_button = document.getElementById("delete-button");
//Helper parser function
function parseExpression(){
    display = eval(document.getElementById("result").textContent);
    if(display == "Infinity" || display == "-Infinity"){
        alert("Cannot divide by zero!");
        display = '0';
        document.getElementById("result").textContent = display;
    }
    else{
        document.getElementById("result").textContent = display;
    }
}
//Event handler attachment
function attachButtonHandlers(){
    clear_button.addEventListener('click', () => {
        display = '0';
        document.getElementById("result").textContent = display;
        clear_button.style.backgroundColor = "khaki";
    });
    clear_button.addEventListener('mousedown', () => {
        clear_button.style.backgroundColor = "brown";
    });
    equals_button.addEventListener('click', parseExpression);
    delete_button.addEventListener('click', () => {
        if(document.getElementById("result").textContent != "0"){
            display = document.getElementById("result").textContent.slice(0, -1);
            document.getElementById("result").textContent = display;
        }
        if(document.getElementById("result").textContent == ""){
            display = '0';
            document.getElementById("result").textContent = display;
        }
    });
}
function attachCellHandlers(){
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
}
attachButtonHandlers();
attachCellHandlers();
