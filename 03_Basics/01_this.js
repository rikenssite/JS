/*
***********
 IMPORTANT
***********
Node.js (The "Private Box" Model)

When you run a script in Node, Node doesn't just run your code. It wraps your code in a "box" (a hidden function).

Imagine you have a file called app.js with this code:

var name = "Gemini";
console.log(this);

Node actually sees this:
JavaScript

// --- START OF HIDDEN WRAPPER ---
(function(exports, require, module, __filename, __dirname) {
    
    var name = "Gemini"; // This is just a local variable inside this function!
    console.log(this);   // 'this' refers to the 'exports' object passed in above
    
})({}, ...); 
    ^--- this is 'this' or module.exports
// --- END OF HIDDEN WRAPPER ---

Why this is empty:

Look at the very last line in the example above: ({}, ...). Node calls that hidden function and passes an empty object {} to act as this.

    Because var name is inside a function, it is trapped in the function's local memory.

    It never "touches" the this object unless you manually put it there.

    this stays {} because its only job is to be a "mailbox" for things you want to send to other files.

_________________________

   PRACTICAL USE CASE
_________________________
PYTHON PROGRAMMING
# Everything here is automatically shared
pi = 3.14
def add(a, b): return a + b

# (In another file)
import math_helper
print(math_helper.pi) # Works automatically!

In Node.js (mathHelper.js)
JavaScript

// These are locked inside this file
const pi = 3.14; 
const add = (a, b) => a + b;

// To make them behave like Python, you MUST bind them to 'this'
this.pi = pi;
this.add = add;

// (In another file)
const math = require('./mathHelper.js');
console.log(math.pi); // Works only because you added it to 'this'

*/
let a = "riken"
console.log(this.a) // undefined

if (true){
    let username2 = "patel"
    console.log(this) // {}
    console.log(this.username2) // undefined
    console.log(username2) // patel
}

// -----------------------------------------------------------
// -----------------------------------------------------------

function add(num1,num2){
    num3 = num1 + num2
    console.log(this) // lots of things inside a object
    console.log(this.num3) // answer
    console.log(num3) // answer
}

add(2,5)

// -----------------------------------------------------------
// -----------------------------------------------------------

const subtract = function(num1,num2){
    num3 = num2 - num1
    console.log(this) // lots of things inside a object
    console.log(this.num3) // answer
    console.log(num3)

}

subtract(3,7)

// -----------------------------------------------------------
// -----------------------------------------------------------

const multiply = (num1,num2) => {
    num3 = num2 * num1
    console.log(this) // {}
    console.log(this.num3) // undefined
    console.log(num3) // answer

}

multiply(3,7)

// -----------------------------------------------------------
// -----------------------------------------------------------
console.log(this)
this.name = "Riken";
this.role = "Node Learner";

console.log(this);
