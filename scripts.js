function add (num1, num2)  {return num1 + num2};
function subtract (num1, num2)  {return num1 - num2};
function multiply (num1, num2)  {return num1 * num2};
function divide (num1, num2)  {return num1 / num2};

let firstNumber;
let secondNumber;
let operator;

function operate (num1, num2, operation){
    switch (operation) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1,num2);
            break;
        default:
            console.log("Not Valid");
    }

};