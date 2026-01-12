
// ****************************************************************************
// adding two numbers

function addTwoNumbers(num1,num2) {
    return (num1+num2);
}

let add = addTwoNumbers(3,6)

// ------------------- NO ERROR ---------------------

console.log(addTw(2,5)) 
// We can use functions before they are declared

function addTw(num1,num2) {
    return (num1+num2);
}

// ****************************************************************************

// ****************************************************************************
// ----------------- NO ERROR -----------------------
// Creating functions and directly assigning it to a variable as it's name 
let addTwo = function(num1,num2) {
    return (num1+num2);
}

console.log(addTwo())
console.log(addTwo(1,2))

// ------------------ ERROR ----------------------
// We cannot use this kind of functions before they are declared
console.log(addThree(1,2,5)) 


let addThree = function(num1,num2,num3) {
    return (num1+num2,num3);
}

// ****************************************************************************

//  SCOPES

let a = 10
var b = 33

if(true){
    
    let a = 12
    console.log("a is ",a)

    var b = 45
    console.log("b is ",b)
}

console.log("outer a is ",a)
console.log("outer b is ",b)