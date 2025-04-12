//step-1 functions

function add (num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return (num1-num2);
}

function multiply(num1,num2){
    return (num1*num2);
}

function divide(num1,num2){
    return (num1/num2);
}

function clear(){
    numOne = "";
    numTwo = "";
    opOne = "";
    opTwo = "";
    textInput.value = "";
}

//step-2 variables

let numOne = null;
let numTwo = null;
let opOne = null;
let opTwo = null;
let sum = 0;

//step-3 operator function

function operatoral(op,num1,num2){
    if(op==="+"){
        return add(num1,num2);
    } else if (op==="-"){
        return subtract(num1,num2);
    } else if(op==="*"){
        return multiply(num1,num2);
    } else if(op==="/"){
        return divide(num1,num2);
    }
};

//step-4
const box = document.querySelectorAll("#calculatorBox");

const numbers = document.querySelectorAll(".number");

const textInput = document.querySelector("#input");

const clearButton = document.querySelector("#clear");

const dot = document.querySelector("#float");

dot.addEventListener("click",(e)=>{
    if(!textInput.value.includes(".")){
    textInput.value += ".";
    }
});

numbers.forEach(number=>number.addEventListener("click",(e)=>{
    textInput.value += `${e.target.textContent}`;
    console.log(e);
}));

clearButton.addEventListener("click",(e)=>{
    clear();
    sum = 0;
    textInput.placeholder = sum;
});

textInput.placeholder = sum;

const operators = document.querySelectorAll(".op");

operators.forEach(operator=>operator.addEventListener("click",(e)=>{
    //if the user wanna start a new calculation when sum already exist
    if(sum){
        if(textInput.value==""){
            numOne = sum;
            sum = 0;
            opOne = e.target.textContent;
        }
    }
    if(numOne){
        numTwo = +textInput.value;
        opTwo = e.target.textContent;
        while(opOne && numOne && numTwo){
            sum = operatoral(opOne,numOne,numTwo);
            numOne = +sum;
            numTwo= "";
            opOne= opTwo;
            opTwo = "";
            };
    };
    if(!numOne){
        numOne = +textInput.value;
        opOne = e.target.textContent;
    };
    textInput.focus();
    console.log(numOne);
    console.log(opOne);
    console.log(numTwo);
    console.log(opTwo);
    textInput.value = "";
    textInput.placeholder = numOne;
}));

const equal = document.querySelector("#equal");
equal.addEventListener("click",(e)=>{
    textInput.placeholder = +sum;
    if(numOne && opOne){
        numTwo = +textInput.value;
        sum = operatoral(opOne,numOne,numTwo);
        clear();
        textInput.placeholder = sum;
        console.log(sum);
    }
});