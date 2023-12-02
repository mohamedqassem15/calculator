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
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        default:
            console.log("Not Valid");
    }

};

operatorsTextContent = ["+", "-", "*", "/", "=", "clear"];

const container = document.getElementById('container');
const display = document.getElementById('display');

let displayText = "";
display.innerText = displayText;

let userInput = "";
let answer;
for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${320 / 4}px`;
        square.style.height = `${320 / 4}px`;
        i <= 9 ? square.innerText = i :  square.innerText = operatorsTextContent[i - 10];
        container.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
            square.style.backgroundColor = "gray";

        });

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hovered');
            square.style.backgroundColor = '';
        });


    
}

let clearInput = false;

container.addEventListener('click', (event) => {
    userInput += event.target.innerText;
    if(clearInput){
        display.innerText = "" ;
    }
    clearInput = false;
    

    if (event.target.innerText === "clear") {
        display.innerText = "";
    } else if (event.target.innerText === "=") {
        keepGoing = false;
        do {

            let operatorIndex = userInput.search(/[\+\-\*\/]/);


            let num1 = parseInt(userInput.substring(0, operatorIndex), 10);
            let num2 = parseInt(userInput.substring(operatorIndex + 1, userInput.length - 1), 10);
            operator = userInput[operatorIndex];
    
            answer = operate(num1, num2, operator);
            console.log(answer);
            display.innerText = answer;
            clearInput = true;

            console.log(event.target.innerText);

        }while(keepGoing);


        

    } else {
        display.innerText += event.target.innerText;
    }

});




