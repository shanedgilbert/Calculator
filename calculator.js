/*
TODO: 
1. add functionality to operators
    - handles multiple different operators
    - inputArray will have numbers and operators
2. previous inputs? above number display
3. github
4. period. make sure it doesnt put 2 in the same number
5. changing of operators befor einputting numbers
*/

let numbers = document.getElementsByClassName("numbers");
let buttons = document.getElementsByTagName("button");

let inputArray = [];
if(inputArray = []) {
    document.querySelector("#clear").innerHTML = "CE";
}

let inputNumber = "";

function buttonPress(clicked_id) {
    switch(clicked_id) {
        case "clear":
            inputNumber = "";
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            if(inputNumber == "") {
                document.querySelector("#clear").innerHTML = "CE";
            }
            if(document.querySelector("#clear").innerHTML = "CE") {
                inputArray = [];
            }
            console.log("clear");
            break;
        
        case "del":
            inputNumber = inputNumber.substring(0, inputNumber.length-1);
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "div":
            inputArray.push(inputNumber);
            inputNumber = "";
            inputArray.push("div");
            break;
        
        case "mult":
            inputArray.push(inputNumber);
            inputNumber = "";
            inputArray.push("mult");
            break;
        
        case "sub":
            inputArray.push(inputNumber);
            inputNumber = "";
            inputArray.push("sub");
            break;
        
        case "add":
            inputArray.push(inputNumber);
            inputNumber = "";
            inputArray.push("add");
            break;
        
        case "equal":
            inputArray.push(inputNumber);
            inputNumber = "";
            operator = "equal";
            break;
        
        case "one":
            inputNumber = inputNumber + 1;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "two":
            inputNumber = inputNumber + 2;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "three":
            inputNumber = inputNumber + 3;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "four":
            inputNumber = inputNumber + 4;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "five":
            inputNumber = inputNumber + 5;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "six":
            inputNumber = inputNumber + 6;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "seven":
            inputNumber = inputNumber + 7;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "eight":
            inputNumber = inputNumber + 8;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "nine":
            inputNumber = inputNumber + 9;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }            
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "zero":
            inputNumber = inputNumber + 0;
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
        
        case "per":
            inputNumber = inputNumber + ".";
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
    }
}

/**
 * Returns the sum of 2 numbers
 * @param {number} num1 the first number being added
 * @param {number} num2 the second number being added
 * @result the sum of num1 and num2
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Returns the result of subtraction between 2 numbers
 * @param {number} num1 the number being subtracted from
 * @param {number} num2 the number subtracting
 * @return num1 - num2
 */
function sub(num1, num2) {
    return num1 - num2;
}

/**
 * Returns the product of 2 numbers
 * @param {number} num1 multiplicand
 * @param {number} num2 multiplicand
 * @return the multiplication of num1 and num2
 */
function mult(num1, num2) {
    return num1 * num2;
}

/**
 * Divides num1 by num2
 * @param {number} num1 numerator
 * @param {number} num2 denominator
 * @return returns the result of the division
 */
function div(num1, num2) {
    return num1 / num2;
}