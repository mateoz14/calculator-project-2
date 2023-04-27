let output = document.querySelector(".output-box");
let oneButton = document.querySelector(".one");
let twoButton = document.querySelector(".two");
let threeButton = document.querySelector('.three');
let equalButton = document.querySelector('.equal');
let addButton = document.querySelector('.add');
let multiplyButton = document.querySelector('.mult');
let subtractButton = document.querySelector('.sub');
let allOperations = document.querySelectorAll('.operations')


let numbers = {n1: "", n2: "", chosenOperator: "", firstNumber: true, displayValue: output.textContent,};
// i scratched the idea of making these 3 variables variables themselves,
// because they would have trouble changing through the functions, changing them
// as objects was the appropriate solution.

function addition() {
    if (numbers.firstNumber == true) {
    numbers.firstNumber = false;
    // declares that we are not in the beginning of a calculation anymore.
    numbers.chosenOperator = addition;
    // sets firstNumber to false, so the solution variable can be stored inside of n1.
    
    } else if (numbers.chosenOperator != addition) {
        numbers.chosenOperator()
        // finds solution to store into n1 with the given operator.
        numbers.n2 = "";
        numbers.chosenOperator = addition;
        // puts it back to addition
        
    }   else {
        numbers.n1 = +numbers.n1 + +numbers.n2;
        // stores the solution inside of n1.
        numbers.n2 = "";
    // resets n2.
    }
};

function multiplication() {
    if (numbers.firstNumber == true) {
        numbers.firstNumber = false;
        numbers.chosenOperator = multiplication;
    } else if (numbers.chosenOperator != multiplication) {
        numbers.chosenOperator();
        numbers.n2 = "";
        numbers.chosenOperator = multiplication
    } else if (numbers.chosenOperator == multiplication && numbers.n2 == "") {
        // do nothing?
    } else {
        numbers.n1 = +numbers.n1 * +numbers.n2;
        numbers.n2 = "";
    }
}

function subtraction() {
    if (numbers.firstNumber == true) {
        numbers.firstNumber = false;
        numbers.chosenOperator = subtraction;
        // ^ to set the chosen operator in the beginning.
    } else if (numbers.chosenOperator != subtraction) {
        numbers.chosenOperator()
        numbers.n2 = "";
        numbers.chosenOperator = subtraction;
    } else {
        numbers.n1 = +numbers.n1 - +numbers.n2;
    }
};



oneButton.addEventListener('click', () => {
    allOperations.disabled = false;
    output.textContent += "1";
    if (numbers.firstNumber == true) {
        numbers.n1 += "1";
    } else if (numbers.firstNumber == false) {
        numbers.n2 += "1";
    } 
});

multiplyButton.addEventListener('click', () => {
    //multiplyButton.disabled = true;
    output.textContent += " x ";
    multiplication();
    
})

subtractButton.addEventListener('click', () => {
    //subtractButton.disabled = true;
    output.textContent += " - ";
    subtraction()
});

addButton.addEventListener('click', () => {
    //addButton.disabled = true
    output.textContent += " + ";
    addition();
});

equalButton.addEventListener('click', () => {
    numbers.chosenOperator();
    output.textContent = `${numbers.n1}`;
    numbers.n2 = "";
});





















