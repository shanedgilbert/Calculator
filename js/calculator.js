/*
TODO: 
1. --FIXED-- previous inputs? above number display
2. --FIXED-- decimal. make sure it doesnt put 2 in the same number
3. --FIXED-- display fewer decimal places
4. --FIXED-- equals > operator > equals = bug 
5. --FIXED-- negative initial number
6. set max width for number and box size
7. --FIXED-- divide by 0
8. --FIXED-- keyboard inputs
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
//Stores the previous operation for secondary display
let previousResults = "";
//Stores symbol version of operator
let operatorSymbol = "";
//Store previous operator (includes equals)
let previousOperator = "";

//Adds event listener for keypress
document.querySelector('.calculator-shell').addEventListener('keydown', keyCapture);

/**
 * Handles the different buttons and their associated functionality (number/operator)
 * @param {String} clicked_id the html id associated with each button
 */
function buttonPress(clicked_id) {
    switch(clicked_id) {
        case "clear":
            inputNumber = "";                                               //Clear input
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            if(inputNumber == "") {
                document.querySelector("#clear").innerHTML = "CE";
            }
            if(document.querySelector("#clear").innerHTML == "CE") {        //Clear everything
                inputArray = [];
                operator = "";
                previousResults = "";
                document.querySelector(".previousNumbers").innerHTML = previousResults;
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
                    if (previousOperator == "equals") {
                        inputArray.pop();
                        inputArray.push(inputNumber);
                        operator = "div";
                        inputNumber = "";
                        previousOperator = "";
                    } else {
                        inputArray.push(inputNumber);
                        let result = operate(operator);
                        document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                        //Handles the pervious operation display
                        let operatorSymbol = operatorConvert(operator);
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                        document.querySelector(".previousNumbers").innerHTML = previousResults;

                        //Resets variables
                        inputArray[0] = result;
                        inputArray.pop();
                        inputNumber = "";
                    }
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));
                    
                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    if (inputNumber == "0") {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + 0 + " = ";
                    } else {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    }
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    if (inputNumber == "0") {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + 0 + " = ";
                    } else {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    }
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    if (previousOperator == "equals") {
                        inputArray.pop();
                        inputArray.push(inputNumber);
                        operator = "mult";
                        inputNumber = "";
                        previousOperator = "";
                    } else {
                        inputArray.push(inputNumber);
                        let result = operate(operator);
                        document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                        //Handles the pervious operation display
                        let operatorSymbol = operatorConvert(operator);
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                        document.querySelector(".previousNumbers").innerHTML = previousResults;

                        //Resets variables
                        inputArray[0] = result;
                        inputArray.pop();
                        inputNumber = "";
                    }
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "mult";
                    inputNumber = "";
                }
            }
        break;
        
        case "sub":
            if (operator == "") {                   //Functions when there is no previous operator
                if(inputNumber == "" && inputArray.length == 0) {               //Allows negative initial numbers
                    inputNumber = "-";
                    document.querySelector(".numbersBox").innerHTML = inputNumber;
                } else if (inputNumber !== "" && inputArray.length !== 1) {     //Saves the input and operator after first input(number then operator)
                    operator = "sub";
                    inputArray.push(inputNumber);
                    inputNumber = "";
                } else if (inputNumber !== "" && inputArray.length == 1) {
                    if (previousOperator == "equals") {
                        inputArray.pop();
                        inputArray.push(inputNumber);
                        operator = "sub";
                        inputNumber = "";
                        previousOperator = "";
                    } else {
                        inputArray.push(inputNumber);
                        let result = operate(operator);
                        document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                        //Handles the pervious operation display
                        let operatorSymbol = operatorConvert(operator);
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                        document.querySelector(".previousNumbers").innerHTML = previousResults;

                        //Resets variables
                        inputArray[0] = result;
                        inputArray.pop();
                        inputNumber = "";
                    }
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    if (previousOperator == "equals") {
                        inputArray.pop();
                        inputArray.push(inputNumber);
                        operator = "add";
                        inputNumber = "";
                        previousOperator = "";
                    } else {
                        inputArray.push(inputNumber);
                        let result = operate(operator);
                        document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                        //Handles the pervious operation display
                        let operatorSymbol = operatorConvert(operator);
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                        document.querySelector(".previousNumbers").innerHTML = previousResults;

                        //Resets variables
                        inputArray[0] = result;
                        inputArray.pop();
                        inputNumber = "";
                    }
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
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
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));

                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
                    inputArray[0] = result;
                    inputArray.pop();
                    operator = "add";
                    inputNumber = "";
                }
            }
        break;

        case "equal":
            if (inputNumber == ".") {           //Checks if inputNumber is only a decimal
                break;
            }
            else if (operator !== "") {
                if (inputNumber == "") {        //Does nothing when there is no number to operate on
                    break;
                } else {
                    inputArray.push(inputNumber);
                    let result = operate(operator);
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));
                    
                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(operator);
                    if (inputNumber == 0 && operator == "div") {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + 0 + " = ";
                    } else {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    }
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
                    inputArray[0] = result;
                    inputArray.pop();
                    tempNumber = inputNumber;
                    inputNumber = "";
                    tempOperator = operator;
                    operator = "";
                    previousOperator = "equals";
                }
            } else if (operator == "") {       
                if (inputArray.length == 0) {   //Does nothing when "equal" is the first button pressed
                    break;
                } else if (inputArray.length == 1) {
                    inputArray.push(tempNumber);
                    let result = operate(tempOperator);
                    document.querySelector(".numbersBox").innerHTML = parseFloat(result.toFixed(6));
                    
                    //Handles the pervious operation display
                    let operatorSymbol = operatorConvert(tempOperator);
                    if (tempNumber == 0 && tempOperator == "div") {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + 0 + " = ";
                    } else {
                        previousResults = parseFloat(parseFloat(inputArray[0]).toFixed(6)) + " " + operatorSymbol + " " + parseFloat(parseFloat(inputArray[1]).toFixed(6)) + " = ";
                    }
                    document.querySelector(".previousNumbers").innerHTML = previousResults;

                    //Resets variables
                    inputArray[0] = result;
                    inputArray.pop();
                    inputNumber = "";
                    operator = "";
                    previousOperator = "equals";
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
            if (inputNumber.includes(".")) {      //Checks for period repetition
                break;
            }
            inputNumber = inputNumber + ".";
            if(document.querySelector("#clear").innerHTML != "C") {
                document.querySelector("#clear").innerHTML = "C";
            }
            document.querySelector(".numbersBox").innerHTML = inputNumber;
            break;
    }
}

//Handles keyboard inputs
function keyCapture(e) {
    e.preventDefault();
    switch(e.keyCode) {
        case 8:                     //'backspace'
            document.getElementById("del").click();
            break;
        case 13:                    //'enter' will count as '='
            document.getElementById("equal").click();
            break;
        case 187:                   //'='
            document.getElementById("equal").click();
            break;
        case 48:                    //'0'
        case 96: 
            document.getElementById("zero").click();
            break;
        case 49:                    //'1'
        case 97:
            document.getElementById("one").click();
            break;
        case 50:                    //'2'
        case 98:
            document.getElementById("two").click();
            break;
        case 51:                    //'3'
        case 99:
            document.getElementById("three").click();
            break;
        case 52:                    //'4'
        case 100:
            document.getElementById("four").click();
            break;
        case 53:                    //'5'
        case 101:
            document.getElementById("five").click();
            break;
        case 54:                    //'6'
        case 102:
            document.getElementById("six").click();
            break;
        case 55:                    //'7'
        case 103:
            document.getElementById("seven").click();
            break;
        case 56:                    //'8'
        case 104:
            document.getElementById("eight").click();
            break;
        case 57:                    //'9'
        case 105:
            document.getElementById("nine").click();
            break;
        case 111:                   //'/'
            document.getElementById("div").click();
            break;
        case 106:                   //'*'
            document.getElementById("mult").click();
            break;
        case 109:                   //'-'
            document.getElementById("sub").click();
            break;
        case 107:                   //'+'
            document.getElementById("add").click();
            break;
        case 110:                   //'.'
            document.getElementById("per").click();
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
    return parseFloat(num1) + parseFloat(num2);
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
    if (num1 !== 0 && num2 == 0) {
        alert("You cannot divide by 0! \nStart Over");
        inputArray.pop();
        return 0;
    } else if (num1 == 0 && num1 == 0) {
        alert("You cannot divide by 0! \nStart Over");
        inputArray.pop();
        return 0;
    }
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

/**
 * Changes the word operator into the symbol operator for display
 * @param {String} operator String word version of the operator
 * @return String symbol of the operator
 */
function operatorConvert(operator) {
    switch(operator) {
        case "add": 
            return "+";
        case "sub": 
            return "-";
        case "div":
            return "/";
        case "mult":
            return "x";
    }
}