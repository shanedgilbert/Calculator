/*
TODO: 
1. previous inputs? above number display
2. decimal. make sure it doesnt put 2 in the same number
3. display fewer decimal places
4. equals > operator > equals = bug
5. negative initial number
*/

//Stores numeric inputs
let inputArray = [];
//Current numeric input
let inputNumber = "";
//Stores operator selection
let operator = "";
//Stores the previous operator (for use with equal repetition)
let tempOperator = "";
//Stores the previous number (for use with equal repetition)
let tempNumber = "";

/**
 * Handles the different buttons and their associated functionality (number/operator)
 * @param {String} clicked_id the html id associated with each button
 */
function buttonPress(clicked_id) {
    switch(clicked_id) {
        case "clear":
            inputNumber = "";
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            if(inputNumber == "") {
                document.querySelector("#clear").innerHTML = "CE";
            }
            if(document.querySelector("#clear").innerHTML == "CE") {
                inputArray = [];
                operator = "";
            }
            break;
        
        case "del":
            inputNumber = inputNumber.substring(0, inputNumber.length-1);
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            if(inputNumber == "") {
                document.querySelector("#clear").innerHTML = "CE";
            }
            break;
        
        case "div":
            if (operator == "") {                   //Functions when there is no previous operator
                if (inputNumber !== "" && inputArray.length !== 1) {       //Saves the input and operator after first input(number then operator)
                    operator = "div";
                    inputArray.push(inputNumber);
                    inputNumber = "";
                } else if (inputNumber !== "" && inputArray.length == 1) {
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                } else if (inputNumber == "") {     //Repetition of operator when there is no input
                    if (inputArray.length == 0) {
                        break; 
                    } else if (inputArray.length == 1) {
                        operator = "div";;
                    }
                }
            } else if (operator == "div") {         //Functions with selected operator   
                if (inputArray.length == 1 && inputNumber !== "") {             //Repetition of the operator when there is a previous and current input (operates)
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                }   else if (inputArray.length == 1 && inputNumber == "") {     //Repetition of the operator when there is no current input (does nothing)
                    break;
                }
            } else if (operator !== "div") {  
                if (inputNumber == "")  {                                       //Changes the operator to div when it was previously something else
                    operator = "div";
                    break;
                } else if (inputNumber !== "") {                                //operates (previous operator) when there is a current input and changes the operator to the new selected operator
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "div";
                    inputNumber = "";
                }
            }
        break;
        
        case "mult":
            if (operator == "") {                   //Functions when there is no previous operator
                if (inputNumber !== "" && inputArray.length !== 1) {       //Saves the input and operator after first input(number then operator)
                    operator = "mult";
                    inputArray.push(inputNumber);
                    inputNumber = "";
                } else if (inputNumber !== "" && inputArray.length == 1) {
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                } else if (inputNumber == "") {     //Repetition of operator when there is no input
                    if (inputArray.length == 0) {
                        break; 
                    } else if (inputArray.length == 1) {
                        operator = "mult";;
                    }
                }
            } else if (operator == "mult") {         //Functions with selected operator   
                if (inputArray.length == 1 && inputNumber !== "") {             //Repetition of the operator when there is a previous and current input (operates)
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                }   else if (inputArray.length == 1 && inputNumber == "") {     //Repetition of the operator when there is no current input (does nothing)
                    break;
                }
            } else if (operator !== "mult") {  
                if (inputNumber == "")  {                                       //Changes the operator to mult when it was previously something else
                    operator = "mult";
                    break;
                } else if (inputNumber !== "") {                                //operates (previous operator) when there is a current input and changes the operator to the new selected operator
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "mult";
                    inputNumber = "";
                }
            }
        break;
        
        case "sub":
            if (operator == "") {                   //Functions when there is no previous operator
                if (inputNumber !== "" && inputArray.length !== 1) {       //Saves the input and operator after first input(number then operator)
                    operator = "sub";
                    inputArray.push(inputNumber);
                    inputNumber = "";
                } else if (inputNumber !== "" && inputArray.length == 1) {
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                } else if (inputNumber == "") {     //Repetition of operator when there is no input
                    if (inputArray.length == 0) {
                        break; 
                    } else if (inputArray.length == 1) {
                        operator = "sub";;
                    }
                }
            } else if (operator == "sub") {         //Functions with selected operator   
                if (inputArray.length == 1 && inputNumber !== "") {             //Repetition of the operator when there is a previous and current input (operates)
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                }   else if (inputArray.length == 1 && inputNumber == "") {     //Repetition of the operator when there is no current input (does nothing)
                    break;
                }
            } else if (operator !== "sub") {  
                if (inputNumber == "")  {                                       //Changes the operator to sub when it was previously something else
                    operator = "sub";
                    break;
                } else if (inputNumber !== "") {                                //operates (previous operator) when there is a current input and changes the operator to the new selected operator
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "sub";
                    inputNumber = "";
                }
            }
        break;

        case "add":
            if (operator == "") {                   //Functions when there is no previous operator
                if (inputNumber !== "" && inputArray.length !== 1) {       //Saves the input and operator after first input(number then operator)
                    operator = "add";
                    inputArray.push(inputNumber);
                    inputNumber = "";
                } else if (inputNumber !== "" && inputArray.length == 1) {
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                } else if (inputNumber == "") {     //Repetition of operator when there is no input
                    if (inputArray.length == 0) {
                        break; 
                    } else if (inputArray.length == 1) {
                        operator = "add";;
                    }
                }
            } else if (operator == "add") {         //Functions with selected operator   
                if (inputArray.length == 1 && inputNumber !== "") {             //Repetition of the operator when there is a previous and current input (operates)
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                }   else if (inputArray.length == 1 && inputNumber == "") {     //Repetition of the operator when there is no current input (does nothing)
                    break;
                }
            } else if (operator !== "add") {  
                if (inputNumber == "")  {                                       //Changes the operator to add when it was previously something else
                    operator = "add";
                    break;
                } else if (inputNumber !== "") {                                //operates (previous operator) when there is a current input and changes the operator to the new selected operator
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "add";
                    inputNumber = "";
                }
            }
        break;

        case "equal":
            if (operator !== "") {
                inputArray.push(inputNumber);
                let result = operate(operator);
                document.querySelector(".numbersBox").innerHTML = result;
                inputArray[0] = result;
                inputArray.pop();
                tempNumber = inputNumber;
                inputNumber = "";
                tempOperator = operator;
                operator = "";
            } else if (operator == "") {
                if (inputArray.length == 0) {
                    break;
                } else if (inputArray.length == 1) {
                    inputArray.push(tempNumber);
                    let result = operate(tempOperator);
                    document.querySelector(".numbersBox").innerHTML = result;
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                    operator = "";
                }
            }
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
    return parseInt(num1) + parseInt(num2);
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

/**
 * Handles different operator calls
 * @param {String} operator 
 * @return the result of the operation
 */
function operate(operator) {
    switch(operator) {
        case "add": 
            return add(inputArray[0], inputArray[1]);
        case "sub": 
            return sub(inputArray[0], inputArray[1]);
        case "div":
            return div(inputArray[0], inputArray[1]);
        case "mult":
            return mult(inputArray[0], inputArray[1]);
    }
}