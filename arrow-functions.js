/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
    return a + b;
}
let sum = addTwoNumbers(5,5);
console.log(sum);

// Arrow Function With Parameters
const addNumbers = (a,b) => { 
    return a + b;
}
let sum1 = addNumbers(4,5);
console.log(sum1);
// Single Line Arrow Function With Parameters

const addNumbers3 = (a,b) => (a + b); // also valid
console.log(addNumbers3(8,9));
const addNumders1 = (a,b) => a + b;
console.log(addNumders1(3,3));
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultiLines = () => (
    `<p> 
    This is multiline string!
    </p>`
)
console.log(returnMultiLines());